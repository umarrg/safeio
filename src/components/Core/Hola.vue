<template>
  <div>
    <div>
      <h2 class="custom__header">Welcome, 👋</h2>
      <v-divider class="primary--text hidden-sm-and-down"></v-divider>
    </div>
    <div v-if="!profile">
      <h2 class="custom__header">Hello, 👋</h2>
      <v-divider class="primary--text hidden-sm-and-down"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    pr: true,
  }),
  methods: {
    getProfile() {
      this.$store.dispatch("FETCH_PROFILE");
    },
  },
  computed: {
    profile() {
      return this.$store.getters.getProfile;
    },
  },
};
</script>
<style scoped>
.custom__header {
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 43px;
  color: rgba(0, 0, 0, 0.5);
}


</style>
