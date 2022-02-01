<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" class="mt-6">
          <Hola />
        </v-col>
        <v-col cols="12">
          <Title name="Choose a  Lawyer" />
        </v-col>
        <v-col cols="12" md="4" v-for="item in therapist" :key="item.name">
          <therapist :img="item.img" :name="item.name" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Therapist from "../../components/Core/Therapist.vue";
import tr1 from "../../assets/the1.svg";
import tr2 from "../../assets/the2.svg";
import tr3 from "../../assets/the3.svg";
import tr4 from "../../assets/the4.svg";
import tr5 from "../../assets/the5.svg";
import tr6 from "../../assets/the6.svg";
import Hola from "../../components/Core/Hola.vue";
import Title from "../../components/Core/Title.vue";
export default {
  components: {
    Therapist,
    Hola,
    Title,
  },

  data: () => ({
    therapist: [
      {
        name: "Barr.Jessica Ahmad",
        img: tr1,
      },
      {
        name: "Adetunde Ayo",
        img: tr2,
      },
      {
        name: " Mary Ekpenyong",
        img: tr3,
      },
      {
        name: "Ime Jeremiah",
        img: tr4,
      },
      {
        name: "Rosemary Okafor",
        img: tr5,
      },
      {
        name: "Ibrahim Muhammed (phd)",
        img: tr6,
      },
    ],
  }),
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.custom__btn {
  border-radius: 15px;
}

.img_div {
  position: absolute;
  bottom: 7px;
  text-align: center;
  left: 0px;
  background: linear-gradient(
    357.36deg,
    #000000 -10.2%,
    rgba(0, 0, 0, 0) 119.69%
  );
  filter: blur(50px);
  right: 0px;
}
</style>
