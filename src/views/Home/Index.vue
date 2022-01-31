<template>
  <v-app class="">
    <v-container>
      <v-row>
        <v-col cols="12" md="10" class="mt-6">
          <Hola />
        </v-col>

        <v-col cols="12" md="12">
          <h2>Quick links</h2>
        </v-col>
        <v-col cols="12" md="10">
          <v-chip
            v-for="item in links"
            :key="item.name"
            class="mr-5 py-6 px-10"
            label
            width="219px"
            color="#F1F2F4"
          >
            <span style="font-size: 20px"> {{ item.name }}</span>
          </v-chip>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
import Hola from "../../components/Core/Hola.vue";

export default {
  components: {
    Hola,
  },
  data: () => ({
    links: [
      {
        name: "Emergency support contact ",
      },
      {
        name: "Legal Support ",
      },
      {
        name: "Counselling Support",
      },
    ],
  }),
  computed: {
    ...mapGetters(["getUser"]),
    document() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
<style scoped>
.custom__btn {
  border-radius: 15px;
}
.t_text {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

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
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #75818f;
}
.p_btn {
  margin-right: 12px;
  background: white;
  font-weight: bold;
  border-radius: 12px;
}
.custom__btn1 {
  border-radius: 15px;
}
</style>
