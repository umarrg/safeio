<template>
  <v-card color="transparent" elevation="0" :width="width">
    <div class="mx-3">
      <h3 class="header_text">Activate Your Account</h3>
      <p class="sub_header">Enter a code sent to your email</p>
    </div>
    <v-form v-model="form" ref="form">
      <v-col cols="12" md="12" class="py-0">
        <v-text-field
          placeholder="Code"
          elevation="1"
          color="primary"
          :rules="[rules.required]"
          class="custom__field"
          background-color="white"
          append-icon="mdi-cube"
          height="65"
          outlined
          v-model="code"
        ></v-text-field>
      </v-col>
    </v-form>

    <v-col cols="12" md="12">
      <div>
        <v-btn
          block
          large
          :loading="loading"
          color="primary"
          :disabled="loading"
          height="65"
          @click="save()"
          class="custom__botton text-capitalize"
          elevation="3"
        >
          Save</v-btn
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
    code: "",
    loading: false,

    form: false,
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
        token: this.code,
      };
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios
          .put(helpers.BaseUrl + "/patient/auth/activate", data)
          .then((res) => {
            console.log(res);
            this.$router.push("/");
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
            alert(err);
          });
      }
    },
  },
  computed: {},
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
