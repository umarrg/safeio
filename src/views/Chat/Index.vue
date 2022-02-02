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
              class="fill-height mb-0 pb-0 mt-1"
            >
              <v-col>
                <div class="my_card">
                  <div>
                    <v-sheet color="white" elevation="1" shaped width="50%">
                        <v-card-text>
                          <span style="font-size: 14px; color: #000000">
                            {{ text }}</span
                          >
                        </v-card-text>
                      </v-sheet>
                  </div>
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
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import Hola from "../../components/Core/Hola.vue";
import pic from "../../assets/nochat.svg";
import tr1 from "../../assets/the1.svg";
import tr2 from "../../assets/the2.svg";
import tr3 from "../../assets/the3.svg";
import tr4 from "../../assets/the4.svg";
import tr5 from "../../assets/the5.svg";
import tr6 from "../../assets/the6.svg";
export default {
  components: {
    Hola,
  },
  data: () => ({
    img: pic,
    chat: [],
    msg: null,
    text: "",
    therapist: [
      {
        id: 1,
        name: "Barr.Jessica Ahmad",
        img: tr1,
      },
      {
        id: 2,
        name: "Adetunde Ayo",
        img: tr2,
      },
      {
        id: 3,
        name: " Mary Ekpenyong",
        img: tr3,
      },
      {
        id: 4,
        name: "Ime Jeremiah",
        img: tr4,
      },
      {
        id: 5,
        name: "Rosemary Okafor",
        img: tr5,
      },
      {
        id: 6,
        name: "Ibrahim Muhammed (phd)",
        img: tr6,
      },
    ],
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
    checkLawyer() {
      if (this.$route.params.id === "1") {
        this.text = "Hello my name is Barr.Jessica Ahmad, How can i help you?";
      } else if (this.$route.params.id === "2") {
        this.text = "Hello my name is Adetunde Ayo, How can i help you?";
      } else if (this.$route.params.id === "3") {
        this.text = "Hello my name is Mary Ekpenyong, How can i help you?";
      } else if (this.$route.params.id === "4") {
        this.text = "Hello my name is Ime Jeremiah, How can i help you?";
      } else if (this.$route.params.id === "5") {
        this.text = "Hello my name is Rosemary Okafor How can i help you?";
      } else if (this.$route.params.id === "6") {
        this.text =
          "Hello my name is Ibrahim Muhammed (phd) How can i help you?";
      }
    },
    addReply() {
      this.chat.push({
        from: "sushant",
        msg: "i will come back to soon.",
      });
    },
  },
  mounted() {
    this.checkLawyer();
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
