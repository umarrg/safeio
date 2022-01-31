<template>
  <v-card color="transparent" elevation="0" :width="width">
    <div class="mx-3">
      <h3 class="header_text">Reset Password</h3>
      <p class="sub_header">Enter a code sent to your email</p>
    </div>
    <v-form v-model="form" ref="form">
      <v-col cols="12" md="12" class="py-0">
        <v-text-field
          placeholder="Code"
          color="primary"
          :rules="[rules.required]"
          class="custom__field"
          background-color="white"
          outlined
          append-icon="mdi-cube"
          v-model="code"
          height="65"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="12" class="py-0">
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          color="primary"
          :rules="[rules.password, rules.required]"
          append-icon="mdi-eye"
          outlined
          placeholder="New Password"
          v-model="password"
          background-color="white"
          class="custom__field"
          height="65"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="12" class="py-0">
        <v-text-field
          :type="showPassword1 ? 'text' : 'password'"
          @click:append="showPassword1 = !showPassword1"
          color="primary"
          :rules="[rules.password, rules.required, passwordConfirmationRule]"
          append-icon="mdi-eye"
          v-model="confirmPassword"
          outlined
          placeholder="Confirm Password"
          background-color="white"
          height="65"
          class="custom__field"
        ></v-text-field>
      </v-col>
    </v-form>
    <v-col cols="12" md="12">
      <div>
        <v-btn
          block
          large
          :loading="loading"
          :disabled="loading"
          color="primary"
          @click="save()"
          class="custom__botton text-capitalize"
          elevation="3"
          height="65"
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
    password: "",
    loading: false,
    resp: [],
    good: false,
    showPassword: "",
    showPassword1: "",
    confirmPassword: "",
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
        password: this.password,
        token: this.code,
      };
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios
          .put(helpers.BaseUrl + "/patient/auth/resetpassword", data)
          .then((res) => {
            (this.loading = false), (res.data.message = this.resp);
            this.good = true;

            this.$router.push("/");

            console.log(res);
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
            alert(err.message);
          });

        // this.$router.push("/home");
      }
    },
  },
  computed: {
    signInMetaData() {
      return this.$store.state.signIn;
    },
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
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
