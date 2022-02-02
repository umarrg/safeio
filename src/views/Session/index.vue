<template>
  <v-app class="px-10 py-10">
    <vue-jitsi-meet
      ref="jitsiRef"
      domain="meet.jit.si"
      :options="jitsiOptions"
    ></vue-jitsi-meet>
  </v-app>
</template>

<script>
import { JitsiMeet } from "@mycure/vue-jitsi-meet";
export default {
  components: {
    VueJitsiMeet: JitsiMeet,
  },
  computed: {
    jitsiOptions() {
      return {
        roomName: "safeo",
        noSSL: false,
        userInfo: {
          email: "contact@bridgingspace.co",
          displayName: "Umar",
        },
        configOverwrite: {
          enableNoisyMicDetection: false,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
        },
        onload: this.onIFrameLoad,
      };
    },
  },
  methods: {
    onIFrameLoad() {
      // do stuff
    },
  },
};
</script>
