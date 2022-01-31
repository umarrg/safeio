<template>
  <v-row class="hidden-md-and-up text-center">
    <Title name="My Profile" />
    <v-col cols="12" md="4">
      <div class="d-flex">
        <v-spacer></v-spacer>
        <v-avatar size="150">
          <img src="../../assets/jane.svg" alt="" />
        </v-avatar>
        <v-btn
          x-small
          elevation=""
          color="secondary"
          to="/editprofile"
          class="custom__btn primary--text"
          >edit profile</v-btn
        >
      </div>
      <div>
        <v-spacer></v-spacer>
        <h2
          style="
            font-style: normal;
            font-weight: bold;
            font-size: 35.55px;
            line-height: 70px;
            color: #000000;
          "
        >
          Jane Okafor
        </h2>
        <p class="my-0">janechukwuka@gmail.com</p>
        <p class="my-0">09012345678</p>
        <v-spacer></v-spacer>
      </div>
      <v-divider class="mt-2"></v-divider>
    </v-col>
    <v-col cols="12" md="8">
      <v-img src="../../assets/cover.svg" contain max-height="420px">
        <div class="suyaa white--text">
          <div
            class="d-flex justify-space-around"
            style="position: relative; top: 40%"
          >
            <h2 style="font-weight: bold; font-size: 20px; ">
              Therapy sessions <br />
              attended
            </h2>

            <h2
              style="font-weight: 800; font-size: 70.371px; line-height: 80px"
            >
              09
            </h2>
          </div>
        </div>
      </v-img>
      <div class="mt-2">
        <v-card-actions>
          <v-btn text color="primary" small class="text-capitalize"
            >Terms of use</v-btn
          >
        </v-card-actions>
        <v-card-actions>
          <v-btn text color="primary" small class="text-capitalize"
            >Contact Us</v-btn
          >
        </v-card-actions>
        <v-card-actions>
          <v-btn text color="primary" small class="text-capitalize"
            >Logout</v-btn
          >
        </v-card-actions>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import Title from "../../components/Core/Title.vue";
export default {
  components: {
    Title,
  },
  methods: {
    back() {
      this.$router.back();
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
.suyaa {
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
}
</style>
