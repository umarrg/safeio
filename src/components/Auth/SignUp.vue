<template>
  <v-card color="transparent" elevation="0" :width="width">
    <div class="mx-3">
      <h3 class="header_text">Create your account</h3>
      <p class="sub_header">
        <v-btn text to="/" color="primary" class="text-capitalize mb-1 px-0"
          >Login</v-btn
        >
        if you already have an account.
      </p>
    </div>

    <v-form v-model="form" ref="form">
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-col cols="12" md="12" class="py-0">
            <v-text-field
              placeholder="Name"
              color="primary"
              :rules="[rules.required]"
              type="email"
              outlined
              append-icon="mdi-account"
              v-model="email"
              @keypress.enter="signUp()"
              height="65"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <v-text-field
              placeholder="Email Address"
              color="primary"
              :rules="[rules.email, rules.required]"
              type="email"
              outlined
              append-icon="mdi-email"
              v-model="email"
              @keypress.enter="signUp()"
              height="65"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12" class="py-0">
            <v-text-field
              placeholder="Phone Number"
              color="primary"
              :rules="[rules.required]"
              type="email"
              outlined
              append-icon="mdi-account"
              v-model="number"
              @keypress.enter="signUp()"
              height="65"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="12">
            <div>
              <v-btn
                block
                large
                color="primary"
                @click="step++"
                elevation="3"
                height="65"
              >
                Sign Up</v-btn
              >
            </div>
          </v-col>
        </v-window-item>
      </v-window>
    </v-form>

    <v-col cols="12" md="12" class="mt-10">
      <v-sheet color="secondary" height="65" class="custom__google">
        <div class="d-flex align-center justify-center pa-5">
          <img src="../../assets/google.svg" alt="logo" />
          <v-spacer></v-spacer>
          <span class="primary--text"> Sign Up with google</span>
          <v-spacer></v-spacer>
        </div>
      </v-sheet>
    </v-col>
    <v-col cols="12" style="margin-top: 136px">
      <v-snackbar
        bottom
        color="warning"
        height="65"
        timeout="5000"
        v-model="signUpMetaData.signUpErrorSnackbar"
      >
        {{ signUpMetaData.signUpErrorPayload }}
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
    step: 1,
    email: "",
    password: "",
    isSelecting: false,
    selectedFile: null,
    url: null,
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
    signUp() {
      // const signUpData = {
      //   email: this.email,
      //   password: this.password,
      // };
      if (this.$refs.form.validate()) {
        // this.$store.dispatch("SIGN_UP", signUpData);
        this.$router.push("/home");
      }
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
      console.log(this.selectedFile);
    },
    handleFileImport() {
      this.isSelecting = true;

      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      this.$refs.uploader.click();
    },
  },
  computed: {
    signUpMetaData() {
      return this.$store.state.signUp;
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
  cursor: pointer;
  box-shadow: 0px;
}
</style>
