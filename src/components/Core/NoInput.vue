<template>
  <div>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <div class="d-flex align-center justify-center">
          <v-img :src="img"></v-img>
        </div>
      </v-flex>
    </v-layout>
    <div class="text-center" > 
      {{text}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    img: String,
  },
};
</script>
