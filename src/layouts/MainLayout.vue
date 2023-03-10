<template>
  <div id="main-layout" class="flex justify-center">
    <div class="general-content">
      <header-component />

      <div class="loading-animation" v-if="hasLoading">
        <lottie
          autoplay
          loop
          class="animate__animated animate__fadeIn animate__faster"
          :options="rickAndMortyAnimation"
          :speed="2"
        />
      </div>

      <slot name="content" v-else />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "src/components/Header/HeaderComponent.vue";
import Lottie from "src/components/Lottie/LottieComponent.vue";
import * as rickAndMortyLottie from "src/assets/lottie/rick-and-morty-animation.json";

export default defineComponent({
  name: "MainLayout",

  components: { HeaderComponent, Lottie },

  props: {
    hasLoading: {
      type: Boolean,
      default: false,
      required: true,
    },
  },

  data() {
    return {
      rickAndMortyAnimation: { animationData: rickAndMortyLottie.default },
    };
  },
});
</script>

<style lang="scss" scoped>
#main-layout {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/background.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .general-content {
    max-width: 1440px;
  }
}

.loading-animation {
  max-width: 1440px;
  width: 100vw;
  height: calc(100vh - 80px);
}
</style>
