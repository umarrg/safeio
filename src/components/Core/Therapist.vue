<template>
  <v-img :src="img" style="border-radius: 10px" contain>
    <div class="img_div">
      <v-row justify="center" align="center" class="img_div">
        <v-col cols="12" class="d-flex justify-center py-0">
          <h4 class="white--text">{{ name }}</h4>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
            color="white"
            x-large
            to="/messages"
            class="custom__btn primary--text text-capitalize mb-3"
            >Select Therapist</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </v-img>
</template>
<script>
export default {
  props: {
    img: String,
    name: String,
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
.theme--light.v-divider {
  border-color: #57a595 !important;
}
.img_div {
  position: absolute;
  bottom: 0px;
  text-align: center;
  left: 0px;
  background: linear-gradient(
    357.36deg,
    #000000 -10.2%,
    rgba(0, 0, 0, 0) 119.69%
  );
  padding-top: 10px;

  right: 0px;
}
</style>
