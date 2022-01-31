<template>
  <v-card color="transparent" elevation="0" :width="width">
    <div class="mx-3">
      <h3 class="header_text">Reset password</h3>
      <p class="sub_header">Enter email address linked to account</p>
    </div>
    <v-alert type="success" v-if="good">
      reset code send to your email
    </v-alert>

    <v-form v-model="form" ref="form">
      <v-col cols="12" md="12" class="py-0">
        <v-text-field
          placeholder="Email Address"
          elevation="1"
          color="primary"
          :rules="[rules.email, rules.required]"
          type="email"
          class="custom__field"
          background-color="white"
          append-icon="mdi-email"
          height="65"
          outlined
          v-model="email"
        ></v-text-field>
      </v-col>
    </v-form>

    <v-col cols="12" md="12">
      <div>
        <v-btn
          block
          large
          color="primary"
          :loading="loading"
          height="65"
          :disabled="loading"
          @click="save()"
          class="custom__botton text-capitalize"
          elevation="3"
        >
          Next</v-btn
        >
      </div>
    </v-col>
  </v-card>
</template>

<script>
import axios from "axios";
import helpers from "../../Services/helpers";
export default {
  props: {
    width: String,
  },
  components: {},
  data: () => ({
    email: "",
    loading: false,
    resp: "",
    form: false,
    good: false,
    rules: {
      email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
      length: (len) => (v) =>
        (v || "").length >= len || `Invalid character length, required ${len}`,
      required: (v) => !!v || "This field is required",
      password: (value) =>
        (value && value.length >= 5) || "Minimum length is 5 characters",
    },
  }),
  methods: {
    save() {
      const data = {
        login: this.email,
      };
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios
          .put(helpers.BaseUrl + "/patient/auth/forgetPassword", data)
          .then((res) => {
            (this.loading = false), (res.data.message = this.resp);
            this.good = true;

            setTimeout(() => {
              this.$router.push("/resetpassword");
            }, 2000);
            this.email = "";

            console.log(res);
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
            alert(err.message);
          });
      }
    },
  },
  computed: {
    signInMetaData() {
      return "";
    },
  },
};
</script>

<style scoped>
.custom_img {
  width: 100%;
  height: 100%;
}
.custom__field {
  border-radius: 15px;
}
.custom__botton {
  border-radius: 15px;
}

.header_text {
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 43px;
  color: #000000;
}
.sub_header {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 29px;
  color: rgba(0, 0, 0, 0.5);
}
.custom__google {
  background: #eef6f4;
  border-radius: 15px;
  box-shadow: 0px;
}
</style>
