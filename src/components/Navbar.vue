<template>
  <div class="mb-0">
    <v-app-bar flat color="white" app>
      <router-link to="/home">
        <v-img src=".././assets/logo.png" width="100" />
      </router-link>
      <v-spacer></v-spacer>
      <div>
        <v-list-item to="/profile">
          <v-list-item-avatar>
            <v-avatar color="primary">
              <img src=".././assets/jane.png" alt="" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-title
            class="hidden-sm-and-down"
            style="
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 28px;

              color: #000000;
            "
          >
            Jane Okafor
          </v-list-item-title>
        </v-list-item>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="primary" dark app>
      <v-layout column align-center class="my-9">
        <v-flex class="mt-5">
          <div class="d-flex justify-center align-center">
            <v-img src=""></v-img>
          </div>
        </v-flex>
      </v-layout>

      <v-list flat class="mt-5">
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
          active-class="border"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            class="ml-2 my-3"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data: () => ({
    drawer: null,
    value: 1,

    selectedItem: 0,
    items: [
      { text: "Home", icon: "mdi-home", to: "/home" },
      { text: "Legal Support", icon: "mdi-calendar-check", to: "/legal" },

      { text: "Chat", icon: "mdi-message", to: "/messages" },
      { text: "Session", icon: "mdi-video", to: "/session" },
      {
        text: "Faq",
        icon: "mdi-help",
        to: "/faq",
      },
      {
        text: "Emergency Support",
        icon: "mdi-cannabis",
        to: "/emergency",
      },
    ],
  }),
  methods: {
    logout() {
      this.$router.push("/");
    },
  },
  mounted() {},
  computed: {
    ...mapGetters(["getUser"]),
    document() {
      return this.$store.getters.getUser;
    },
  },
};
</script>
<style>
.headline {
  color: #1f3a67;
  font-weight: 700;
}
.custom_color {
  background: #2a4f66;
}
.custom__card {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(13, 149, 193, 1) 0%,
    rgba(31, 58, 103, 1) 0%,
    rgba(13, 149, 193, 1) 100%,
    rgba(0, 212, 255, 0.9906163148853291) 100%
  );
}

.border {
  background: #fff;
  color: #57a595;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  text-decoration: none;
  color: aqua;
}
.border b:nth-child(1) {
  position: absolute;
  top: -20px;
  height: 20px;
  width: 83%;
  background: #fff;

  display: none;
}
.border b:nth-child(1)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 10px;
  background: #fff;
}
.border b:nth-child(2) {
  position: absolute;
  bottom: -20px;
  height: 20px;
  width: 83%;
  background: #fff;
  display: none;
}
.border b:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top-right-radius: 10px;
}
.border b:nth-child(1),
.border b:nth-child(2) {
  display: block;
}
</style>
