<template>
  <v-app class="custom_bg">
    <NavBar v-if="$route.meta.showHeader == true" />
    <MobileBack v-if="$route.meta.showBack == true" class="hidden-md-and-up" />

    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>
        <ButtomNav v-if="$route.meta.showHeader == true" class="hidden-md-and-up" />
  </v-app>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import MobileBack from "./components/Core/Back.vue";
import ButtomNav from "./components/BottomNav.vue";
export default {
  components: {
    NavBar,
    MobileBack,
    ButtomNav
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>



</style>
