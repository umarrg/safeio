<template>
  <v-container>
    <v-btn icon @click="back()" class="mt-3" large>
      <v-icon color="primary">mdi-less-than</v-icon>
    </v-btn>
  </v-container>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
