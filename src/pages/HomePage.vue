<template>
  <main-layout>
    <template v-slot:content>
      <div id="home-page" class="flex column items-center">
        <img
          src="src/assets/rick-and-morty-text.svg"
          class="rick-and-morty-text-image q-mt-xl animate__animated animate__bounceIn"
        />

        <img
          src="src/assets/rick-and-morty-spaceship.svg"
          class="rick-and-morty-spaceship q-mt-md animate__animated animate__zoomInUp animate__slow"
        />
      </div>
    </template>
  </main-layout>
</template>

<script>
import "animate.css";
import { defineComponent } from "vue";
import MainLayout from "src/layouts/MainLayout.vue";

export default defineComponent({
  name: "HomePage",

  components: { MainLayout },
});
</script>

<style lang="scss" scoped>
#home-page {
  height: calc(100vh - 80px);

  .rick-and-morty-text-image,
  .rick-and-morty-spaceship {
    max-width: 750px;
    min-width: 350px;
    max-height: 286px;
    width: 100vw;
    padding: 20px;
  }
}

@media (max-width: 600px) {
  #home-page {
    justify-content: center;

    .rick-and-morty-text-image,
    .rick-and-morty-spaceship {
      margin-top: 0;
    }
  }
}
</style>
