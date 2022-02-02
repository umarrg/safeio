<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" class="mt-6">
          <Hola />
        </v-col>
        <v-col cols="12">
          <Title name="Emergency Contacts" />
        </v-col>
        <v-col cols="12" md="10">
          <v-expansion-panels accordion focusable>
            <v-expansion-panel v-for="item in contact" :key="item.names">
              <v-expansion-panel-header>{{
                item.name
              }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <a href="tel:+"> {{ item.number }}</a>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Hola from "../../components/Core/Hola.vue";
import Title from "../../components/Core/Title.vue";
export default {
  components: {
    Hola,
    Title,
  },

  data: () => ({
    contact: [
      {
        name: "Nigerian Police Force",
        number: "+234556666",
      },
      {
        name: "Intelligence Agency",
        number: "+234556567",
      },
      {
        name: " Nigerian Security and Civil Defense Force ",
        number: "+234588098",
      },
      {
        name: "Nigerian Army",
        number: "+234556600",
      },
    ],
  }),
  methods: {
    back() {
      this.$router.back();
    },
    go(id) {
      this.$router.push("/chat/" + id);
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
