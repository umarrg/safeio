<template>
  <v-card rounded="lg">
    <v-img src="../../assets/the1.svg">
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
              Jessica Ahmed (PhD)
            </p>
            <p
              class="primary--text text-wrap"
              style="
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                max-width: 300px;
              "
            >
              You have 7 days left to chat with your therapist
            </p>
          </div>
          <div>
            <v-avatar
              size="90"
              style="
                background: #eef6f4;
                border: 0.7px solid #57a595;
                border-radius: 20px;
              "
              class="d-flex flex-column primary--text"
            >
              <span
                style="font-style: normal; font-weight: 800; font-size: 36px"
                >7</span
              >
              <span style="font-weight: 600; font-size: 14px">Days</span>
            </v-avatar>
          </div>
        </div>
        <div class="px-6 mb-5">
          <v-btn block color="primary" x-large rounded="lg"
            >Book a new session</v-btn
          >
        </div>
      </div>
    </v-img>
  </v-card>
</template>

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
