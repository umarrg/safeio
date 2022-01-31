<template>
  <v-card color="transparent" elevation="0" :width="width">
    <div class="mx-3">
      <h3 class="header_text">Login to your account</h3>
      <p class="sub_header">
        If you’re new,
        <v-btn
          text
          to="/signup"
          color="primary"
          class="text-lowercase mb-1 pa-0"
          >create account</v-btn
        >
      </p>
    </div>

    <v-form v-model="form" ref="form">
      <v-col cols="12" md="12" class="py-0">
        <v-text-field
          placeholder="Email Address"
          large
          color="primary"
          :rules="[rules.email, rules.required]"
          type="email"
          outlined
          height="65"
          @keypress.enter="signIn()"
          v-model="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="12" class="py-0">
        <v-text-field
          large
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          color="primary"
          :rules="[rules.password, rules.required]"
          append-icon="mdi-eye"
          outlined
          height="65"
          placeholder="Password"
          v-model="password"
          @keypress.enter="signIn()"
        ></v-text-field>
      </v-col>
      <div>
        <v-btn
          text
          to="/forgotpassword"
          color="primary"
          class="text-capitalize px-0 ml-4"
          style="color: rgba(0, 0, 0, 0.35)"
          >Forgot Password?</v-btn
        >
      </div>
    </v-form>

    <v-col cols="12" md="12">
      <div>
        <v-btn
          block
          large
          :loading="signInMetaData.signInLoading"
          :disabled="signInMetaData.signInDisabled"
          color="primary"
          @click="signIn()"
          height="65"
          class=" text-capitalize"
          elevation="3"
        >
          Login</v-btn
        >
      </div>
    </v-col>
    <v-col cols="12" md="12" style="margin-top: 136px">
      <!-- <v-btn
        color="secondary"
        class="custom__google primary--text"
        large
        block
        height="65"
      >
        <v-icon color="red">mdi-google</v-icon>
        <v-spacer></v-spacer>

        Login with google
        <v-spacer></v-spacer>
      </v-btn> -->
      <v-sheet color="secondary" height="65" class="custom__google">
        <div class="d-flex align-center justify-center pa-5">
          <img src="../../assets/google.svg" alt="logo" />
          <v-spacer></v-spacer>
          <span class="primary--text"> Sign In with google</span>
          <v-spacer></v-spacer>
        </div>
      </v-sheet>
    </v-col>

    <v-col cols="12" md="12">
      <v-snackbar
        bottom
        color="warning"
        timeout="5000"
        v-model="signInMetaData.signInErrorSnackbar"
      >
        {{ signInMetaData.signInErrorPayload }}
      </v-snackbar>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    width: String,
  },
  components: {},
  data: () => ({
    email: "",
    password: "",
    showPassword: "",
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
    signIn() {
      const signInData = {
        email: this.email,
        password: this.password,
      };
      if (this.$refs.form.validate()) {
        // this.$store.dispatch("SIGN_IN", signInData);
        this.$router.push("/home")
      
      }
      console.log(signInData);
    },
  },
  computed: {
    signInMetaData() {
      return this.$store.state.signIn;
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
  cursor: pointer;
  box-shadow: 0px;
}
</style>
