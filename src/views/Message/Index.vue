<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" class="mt-6">
          <Hola />
        </v-col>
        <v-col cols="12" md="12">
          <v-card max-height="">
            <v-toolbar>
              <v-toolbar-title> </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                rounded
                style="width: 70px"
                filled
                color="#868686"
                dense
                class="mt-6 mx-2"
                prepend-inner-icon="mdi-magnify"
                placeholder="Search here"
              >
              </v-text-field>
              <v-avatar size="40" color="#f1f2f6">
                <v-icon color="">mdi-filter-variant</v-icon>
              </v-avatar>
            </v-toolbar>

            <v-card
              height="515"
              color="secondary"
              cl
              class="fill-height  mb-0 pb-0 mt-1"
            >
              <v-col>
                <div class="my_card">
                  <div
                    v-for="(item, index) in chat"
                    :key="index"
                    :class="[
                      'd-flex flex-row align-center my-2',
                      item.from == 'user' ? 'justify-end' : null,
                    ]"
                  >
                    <div v-if="item.from == 'user'" class="blue--text mr-3">
                      <v-sheet color="#9C27B0" shaped>
                        <v-card-text>
                          <span style="font-size: 14px; color: white">
                            {{ item.msg }}</span
                          >
                        </v-card-text>
                      </v-sheet>
                    </div>

                    <div v-if="item.from != 'user'" class="blue--text ml-3">
                      <v-sheet color="white" elevation="1" shaped>
                        <v-card-text>
                          <span style="font-size: 14px; color: #000000">
                            {{ item.msg }}</span
                          >
                        </v-card-text>
                      </v-sheet>
                    </div>
                  </div>
                </div>
              </v-col>

              <div class="custom_div">
                <v-text-field
                  v-model="msg"
                  class="mx-3 my-2"
                  label="Type a messages"
                  color="#8e8e8e"
                  type="text"
                  @keypress.enter="send"
                  no-details
                  prepend-inner-icon="mdi-emoticon"
                  append-icon="mdi-camera"
                  solo
                  hide-details
                >
                  <template v-slot:append>
                    <v-file-input
                      accept="image/*"
                      hide-input
                      prepend-icon="mdi-camera"
                      class="pa-0 ma-0"
                    ></v-file-input>

                    <v-file-input
                      multiple
                      label=""
                      hide-input
                      class="pa-0 ma-0"
                    ></v-file-input>
                    <v-btn icon class="mt-2" small @click="send">
                      <v-icon>mdi-send</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </div>
            </v-card>
          </v-card>
        </v-col>

        <!-- <v-col cols="12" md="12">
          <h3
            style="
              font-style: normal;
              font-weight: 800;
              font-size: 30px;
              line-height: 36px;
              color: #57a595;
            "
          >
            Chat With Patient
          </h3>
        </v-col>

        <v-col cols="12" md="7">
          <NoMessage
            :img="img"
            text="You haven’t booked a session yet, notwithstanding
           leave a message and we will pair you for FREE
            with a professional listener in a few hours."
          />
        </v-col>

        <v-divider
          vertical
          class="custom__divider hidden-sm-and-down"
        ></v-divider>

        <v-col cols="12" md="5" class="custom__col">
          <v-list class="mb-0 pb-0">
            <v-list-item class="pa-0 ma-0">
              <v-list-item-content>
                <v-list-item-title> Anisa Muhammad </v-list-item-title>
                <v-list-item-subtitle> offline </v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-avatar>
                <v-avatar>
                  <img src="../../assets/the1.svg" alt="image" />
                </v-avatar>
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
          <div class="chat__div">
            <v-container class="fill-height">
              <v-row class="fill-height pb-14" align="end">
                <v-col>
                  <div
                    v-for="(item, index) in chat"
                    :key="index"
                    :class="[
                      'd-flex flex-row align-center my-2',
                      item.from == 'user' ? 'justify-end' : null,
                    ]"
                  >
                    <div v-if="item.from == 'user'" class="blue--text mr-3">
                      <v-sheet color="#ECEBEB" shaped>
                        <v-card-text>
                          <span
                            style="
                              font-size: 14px;
                              color: #000000;
                            "
                          >
                            {{ item.msg }}</span
                          >
                        </v-card-text>
                      </v-sheet>
                    </div>

                    <div v-if="item.from != 'user'" class="blue--text ml-3">
                      <v-sheet color="white" elevation="1" shaped>
                        <v-card-text>
                          <span style="font-size: 14px; color: #000000">
                            {{ item.msg }}</span
                          >
                        </v-card-text>
                      </v-sheet>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <v-card class="bottom__div" width="100%" flat>
            <v-card-text>
              <div class="d-flex align-center justify-center">
                <v-text-field
                  outlined
                  rounded
                  v-model="msg"
                  hide-details=""
                  placeholder="send a messaage"
                  dense
                  @keypress.enter="send"
                  background-color="white"
                ></v-text-field>
                <div class="mx-1 mb-1">
                  <v-btn icon @click="send">
                    <v-icon color="">mdi-arrow-right-circle</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Hola from "../../components/Core/Hola.vue";
import pic from "../../assets/nochat.svg";
export default {
  components: {
    Hola,
  },
  data: () => ({
    img: pic,
    chat: [],
    msg: null,
  }),
  methods: {
    back() {
      this.$router.back();
    },
    send() {
      this.chat.push({
        from: "user",
        msg: this.msg,
      });
      this.msg = null;
      this.addReply();
    },
    addReply() {
      this.chat.push({
        from: "sushant",
        msg: "Hello",
      });
    },
  },
};
</script>
<style scoped>
.custom__divider {
  position: absolute;
  top: 85px;
  right: 43%;
}
.my_card {
  overflow-y: auto;
  height: 400px;
}
.custom_div {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
.custom__col {
  position: absolute;
  bottom: 0px;
  right: 6px;
  top: 70px;
}
.custom__btn {
  border-radius: 15px;
}
.custom__img {
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: 20px;
}
.theme--light.v-divider {
  border-color: #57a595 !important;
}
.bottom__div {
  position: absolute;
  top: 610px;
  height: 100px;
}
.chat__div {
  overflow-y: auto;
}
</style>
