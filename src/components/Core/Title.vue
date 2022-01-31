<template>
  <v-list-item class="pa-0 ma-0">
    <v-list-item-icon class="hidden-sm-and-down" @click="back()" style="cursor: pointer">
      <v-icon color="black">mdi-less-than</v-icon>
      <v-icon color="black" class="mt-2 ml-2">mdi-dots-horizontal</v-icon>
    </v-list-item-icon>
    <v-list-item-title class="primary--text">
      <h3>{{ name }}</h3>
    </v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  props: {
    name: String,
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
