<template>
  <main-layout> Hello world </main-layout>
</template>

<script>
import MainLayout from "src/layouts/MainLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",

  components: { MainLayout },
});
</script>
