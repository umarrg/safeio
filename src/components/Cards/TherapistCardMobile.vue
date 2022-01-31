<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-card
        v-on="on"
        hover
        flat
        v-bind="attrs"
        max-height="333"
        rounded="xl"
        class=""
        style="border: 1px solid #57a595"
      >
        <div class="d-flex">
          <v-img :src="img" width="70%" height="331" class="rounded-l-xl">
            <div class="suyaa"></div>
          </v-img>
          <div
            class="pt-12 px-2"
            style="height: 333px; background: background: linear-gradient(272.31deg, #FFFFFF 41.43%, rgba(255, 255, 255, 0) 72.98%);"
          >
            <div>
              <p
                style="
                  font-style: normal;
                  font-weight: bold;
                  font-size: 18px;
                  line-height: 34px;

                  color: #000000;
                "
              >
                {{ name }}
              </p>
            </div>
            <div class="my-12">
              <p
                style="
                  font-style: normal;
                  font-weight: 300;
                  font-size: 14px;
                  color: #000000;
                "
              >
                {{ date }}
              </p>
              <p
                style="
                  font-style: normal;
                  font-weight: 300;
                  font-size: 14px;
                  color: #000000;
                "
              >
                {{ time }}
              </p>
            </div>
            <div class="pt-6">
              <p
                style="
                  font-style: normal;
                  font-weight: normal;
                  font-size: 20px;
                  line-height: 25px;

                  color: #da8607;
                "
              >
                {{ status }}
              </p>
            </div>
          </div>
        </div>
      </v-card>
    </template>
    <v-card rounded="lg">
      <v-img :src="img" max-height="450px">
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-btn icon class="ma-2" @click="dialog = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="dialog__container"></div>
        <div style="position: absolute; bottom: 5px; width: 100%">
          <div class="d-flex align-center justify-space-between px-6">
            <div>
              <p
                style="
                  font-style: normal;
                  font-weight: bold;
                  font-size: 22px;
                  /* identical to box height */

                  text-align: right;

                  color: #000000;
                "
              >
                {{ name }}
              </p>
              <p
                style="
                  font-style: normal;
                  font-weight: normal;
                  font-size: 18px;

                  /* identical to box height */

                  text-align: right;

                  color: #da8607;
                "
              >
                {{ status }}
              </p>
            </div>
            <div>
              <p
                style="
                  font-style: normal;
                  font-weight: 300;
                  font-size: 16px;

                  /* identical to box height */

                  text-align: right;

                  color: #000000;
                "
              >
                {{ date }}
              </p>
              <p
                style="
                  font-style: normal;
                  font-weight: 300;
                  font-size: 16px;

                  /* identical to box height */

                  text-align: right;

                  color: #000000;
                "
              >
                {{ time }}
              </p>
            </div>
          </div>
          <div class="px-6">
            <v-btn block color="primary" x-large rounded="lg"
              >Lunch Sesion</v-btn
            >
          </div>
        </div>
      </v-img>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    name: String,
    date: String,
    time: String,
    status: String,
    img: String,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>

<style scoped>
.suyaa {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    transparent 20%,
    white 100%
  ); /* Set radial-gradient to faded edges */
}

.dialog__container {
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, transparent 20%, white 90%);
}
</style>
