<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" md="10" class="mt-12">
          <h2>Settings</h2>
        </v-col>
        <v-col cols="12" md="10">
          <v-tabs v-model="tabs" align-start>
            <v-tab>Personal Info </v-tab>

            <v-tab> Security & Wallet </v-tab>
          </v-tabs>
          <v-divider class=""></v-divider>
        </v-col>
        <v-col cols="12" md="10">
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-col cols="12" md="8" class="pl-0">
                <div class="my-2">
                  <v-img
                    :src="url"
                    class="custom_img"
                    width="100"
                  >
                    <div style="position: absolute; right: 0px; bottom: 0px">
                      <v-btn
                        icon
                        small
                        class="pa-3"
                        :loading="isSelecting"
                        @click="handleFileImport"
                      >
                        <img src="../../assets/btn.svg" alt="icon" />
                      </v-btn>
                      <input
                        ref="uploader"
                        class="d-none"
                        type="file"
                        @change="onFileChanged"
                      />
                    </div>
                  </v-img>
                </div>
                <v-list v-for="item in personal" :key="item.title">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="t_text mb-3">{{
                        item.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle class="s_text"
                        >{{ item.subtitle }}
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn text color="primary" @click="item.show = true"
                        >Edit</v-btn
                      >
                    </v-list-item-action>
                  </v-list-item>
                  <div class="ml-4" v-if="item.show">
                    <div class="d-flex align-center">
                      <div style="width: 400px">
                        <v-textarea
                          :placeholder="`Enter Your ${item.title}`"
                          outlined
                          v-model="item.field"
                          v-if="item.title === 'About'"
                        ></v-textarea>
                        <v-text-field
                          :placeholder="`Enter Your ${item.title}`"
                          outlined
                          v-if="item.title !== 'About'"
                          v-model="item.field"
                          class="custom__field"
                        ></v-text-field>
                      </div>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        @click="item.show = false"
                        class="mr-5"
                        >Save</v-btn
                      >
                    </div>
                  </div>
                  <v-divider class=""></v-divider>
                </v-list>
              </v-col>
            </v-tab-item>
            <v-tab-item>
              <v-col cols="12" md="8" class="pl-0">
                <v-list v-for="item in security" :key="item.title">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="t_text mb-3">{{
                        item.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle class="s_text"
                        >{{ item.subtitle }}
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn text color="primary" @click="item.show = true">{{
                        item.action
                      }}</v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <div class="ml-4" v-if="item.show">
                    <div class="d-flex align-center">
                      <div style="width: 400px">
                        <v-text-field
                          :placeholder="`Enter Your ${item.title}`"
                          outlined
                          v-if="item.title !== 'About'"
                          v-model="item.field"
                          class="custom__field"
                        ></v-text-field>
                      </div>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        @click="item.show = false"
                        class="mr-5"
                        >Save</v-btn
                      >
                    </div>
                  </div>
                  <v-divider class=""></v-divider>
                </v-list>
              </v-col>
              <v-col cols="12" md="8" class="pl-0">
                <h2 class="ml-4 my-4">Account Details</h2>
                <v-list v-for="item in wallet" :key="item.title">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="t_text mb-3">{{
                        item.title
                      }}</v-list-item-title>
                      <v-list-item-subtitle class="s_text"
                        >{{ item.subtitle }}
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn text color="primary" @click="item.show = true"
                        >Edit
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <div class="ml-4" v-if="item.show">
                    <div class="d-flex align-center">
                      <div style="width: 400px">
                        <v-text-field
                          :placeholder="`Enter Your ${item.title}`"
                          outlined
                          v-if="item.title !== 'About'"
                          v-model="item.field"
                          class="custom__field"
                        ></v-text-field>
                      </div>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        @click="item.show = false"
                        class="mr-5"
                        >Save</v-btn
                      >
                    </div>
                  </div>
                  <v-divider class=""></v-divider>
                </v-list>
              </v-col>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import img from "../../assets/Edet.svg"
export default {
  name: "Example",
  components: {},
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      loading: false,
      url: img,
      tabs: null,
      show: false,
      wallet: [
        {
          title: "Select Bank",
          subtitle: "UBA",
          show: false,
          field: "",
        },
        {
          title: "Account Name",
          subtitle: "Edet",
          show: false,
          field: "",
        },
        {
          title: "Account Number",
          subtitle: "1440483344",
          show: false,
          field: "",
        },
      ],
      security: [
        {
          title: "Email",
          subtitle: "Edet.umar@gmail.com",
          show: false,
          field: "",
          action: "Request email change",
        },
        {
          title: "Password",
          subtitle: "*************",
          show: false,
          field: "",
          action: "Update",
        },
      ],
      personal: [
        {
          title: "Name",
          subtitle: "Edet",
          show: false,
          field: "",
        },
        {
          title: "Country",
          subtitle: "Nigeria",
          show: false,
          field: "",
        },
        {
          title: "About",
          subtitle: "Edet",
          show: false,
          field: "",
        },
        {
          title: "Phone Number",
          subtitle: "07016505825",
          show: false,
          field: "",
        },
        {
          title: "Pronouns",
          subtitle: "Edet",
          show: false,
          field: "",
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.back();
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

    },
  },
};
</script>
<style scoped>
.custom_img {
  border-radius: 30px;
}
.custom__btn {
  border-radius: 15px;
}
.t_text {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #10233d;
}
.cal_text {
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-right: 10px;
  color: #10233d;
}
.s_text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #75818f;
}
.p_btn {
  margin-right: 12px;
  background: white;
  font-weight: bold;
  border-radius: 12px;
}
.custom__field {
  border-radius: 15px;
}
</style>
