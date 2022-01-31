<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="primary" @click="dialog = false">mdi-close</v-icon>
        </v-btn>
        <v-btn class="" color="primary" text @click="dialog = false"
          >close</v-btn
        >
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-layout justify-center align-center>
                <v-flex shrink>
                  <div>
                    <v-img src="../../assets/checker.svg" width="100"></v-img>
                  </div>
                </v-flex>
              </v-layout>
              <div>
                <p
                  style="
                    ont-style: normal;
                    font-weight: 800;
                    font-size: 40px;
                    line-height: 48px;
                    text-align: center;
                    color: #57a595;
                  "
                >
                  Payment Successful
                </p>
              </div>
              <div>
                <p
                  style="
                    font-style: normal;
                    font-weight: 300;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: center;
                    color: #000000;
                  "
                >
                  BridgingSpace will never ask you for your debit card details
                  via emial, phone call, SMS or any other means
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
