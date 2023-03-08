<template>
  <div id="main-layout" class="flex justify-center">
    <div class="general-content">
      <header-component />

      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderComponent from "src/components/Header/HeaderComponent.vue";

export default defineComponent({
  name: "MainLayout",

  components: { HeaderComponent },
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
</style>
