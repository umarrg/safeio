<template>
  <v-bottom-navigation :value="value" color="primary" grow fixed app>
    <v-btn to="/home">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/messages">
      <span>chat</span>

      <v-icon>mdi-chat</v-icon>
    </v-btn>

    <v-btn>
      <span>Session</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({ value: 1 }),
};
</script>
