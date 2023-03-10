<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    options: {
      type: Object,
      required: true,
    },

    autoplay: {
      type: Boolean,
      default: true,
    },

    height: {
      type: Number,
      required: false,
    },

    width: {
      type: Number,
      required: false,
    },

    speed: {
      type: [Number, String],
      required: false,
      default: 1,
    },
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}` : "100%",
        height: this.height ? `${this.height}` : "100%",
        overflow: "hidden",
        margin: "0",
      },
    };
  },

  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: "svg",
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings,
    });

    this.anim.setSpeed(this.speed);
  },
};
</script>
