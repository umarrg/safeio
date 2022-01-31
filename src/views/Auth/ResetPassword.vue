<template>
  <v-app class="custom__bg">
    <v-container fluid fill-height>
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex justify-center align-center">
            <div
              class="d-flex align-center justify-center"
              style="margin-top: 80px"
            >
              <reset width="500px" class="hidden-sm-and-down" />
              <reset class="hidden-md-and-up" />
            </div>
          </div>
         
        </v-col>
        <v-col cols="6" class="hidden-sm-and-down pa-0 ma-0">
          <v-img src="../../assets/atiya.svg" />
        </v-col>
      </v-row>
    </v-container>
    <div style="width: 90px; position: absolute; top: 0px">
      <router-link to="/home">
        <v-img src="../../assets/logo.png"></v-img>
      </router-link>
    </div>
  </v-app>
</template>

<script>
import Reset from "../../components/Auth/ResetPassword.vue";
export default {
  components: {
    Reset,
  },
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style scoped>
.custom_img {
  width: 100%;
  height: 100%;
}

.custom__bg {
  background: #fafcfc;
}
</style>
