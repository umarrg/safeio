<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" class="hidden-sm-and-down">
          <div style="width: 90px">
            <router-link to="/home">
              <v-img src="../../assets/logo.png"></v-img>
            </router-link>
          </div>
        </v-col>
        <v-col cols="12" class="mt-6 hidden-sm-and-down">
          <v-divider class="primary--text hidden-sm-and-down"></v-divider>
        </v-col>
        <v-col cols="12" md="7">
          <v-row justify="center">
            <v-col cols="12" md="5">
              <div class="d-flex align-center justify-center">
                <div class="d-flex">
                  <v-avatar size="200">
                    <img src="../../assets/jane.svg" alt="" />
                  </v-avatar>
                  <div class="hidden-md-and-up">
                    <div>
                      <v-btn
                        x-small
                        elevation=""
                        color="secondary"
                        class="custom__btn primary--text ml-6"
                        :loading="isSelecting"
                        @click="handleFileImport"
                      >
                        Upload picture
                      </v-btn>

                      <input
                        ref="uploader"
                        class="d-none"
                        type="file"
                        @change="onFileChanged"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 hidden-sm-and-down">
                <div>
                  <v-btn
                    small
                    elevation=""
                    color="secondary"
                    class="custom__btn primary--text ml-10"
                    :loading="isSelecting"
                    @click="handleFileImport"
                  >
                    Upload picture
                  </v-btn>

                  <input
                    ref="uploader"
                    class="d-none"
                    type="file"
                    @change="onFileChanged"
                  />
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="6">
              <v-form v-model="form" ref="form">
                <div>
                  <v-text-field
                    type=""
                    background-color="white"
                    placeholder="First Name"
                    outlined
                    v-model="fname"
                    class="custom__field"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    type=""
                    background-color="white"
                    placeholder="Last Name"
                    outlined
                    v-model="lname"
                    class="custom__field"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    type=""
                    background-color="white"
                    placeholder="Email Address"
                    outlined
                    v-model="email"
                    class="custom__field"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    type=""
                    background-color="white"
                    placeholder="Phone Number"
                    outlined
                    v-model="number"
                    class="custom__field"
                  ></v-text-field>
                </div>
              </v-form>
            </v-col>

            <v-col cols="1" class="hidden-sm-and-down">
              <v-divider
                vertical
                class="custom__divider hidden-sm-and-down"
              ></v-divider>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="5" class="hidden-sm-and-down">
          <v-img :src="url" contain />
        </v-col>
        <v-col cols="12" md="2">
          <v-btn
            block
            large
            color="primary"
            class="custom__btn"
            @click="save()"
            :loading="loading"
            :disabled="loading"
            >Save</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import axios from "axios";
import helpers from "../../Services/helpers";
export default {
  name: "Example",
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      loading: false,
      form: false,
      url: null,
      fname: "",
      lname: "",
      email: "",
      number: "",
    };
  },
  methods: {
    save() {
      const data = {
        firstName: this.fname,
        lastName: this.lname,
        username: this.email,
        phone: this.number,
      };
      if (this.$refs.form.validate()) {
        this.loading = true;
        axios
          .post(helpers.BaseUrl + "/patient/profile", data)
          .then((res) => {
            console.log(res);
            this.loading = false;
          })
          .catch((err) => {
            this.loading = false;
            console.log(err);
          });
      }
    },
    back() {
      this.$router.back();
    },
    getProfile() {
      this.$store.dispatch("FETCH_PROFILE");
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
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
      console.log(this.selectedFile);

      // Do whatever you need with the file, liek reading it with FileReader
    },
  },

  mounted() {},
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    },
  },
};
</script>
<style scoped>
.custom__header {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 43px;
  color: rgba(0, 0, 0, 0.5);
}
.custom__btn {
  border-radius: 15px;
}
.custom__img {
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 20px;
}
.theme--light.v-divider {
  border-color: #57a595 !important;
}
.custom__divider {
  position: absolute;
  top: 112px;
}
.custom__field {
  border-radius: 15px;
}
</style>
