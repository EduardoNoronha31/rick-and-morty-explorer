<template>
  <div
    id="character-card"
    class="flex q-pa-md q-ma-sm shadow-4 cursor-pointer platform__animation__scale_1-05 animate__animated animate__fadeIn"
  >
    <div class="top-content">
      <img :src="character.image" />
    </div>

    <div class="bottom-content flex column justify-between">
      <div
        class="character-name flex items-center justify-center q-px-sm q-py-md"
      >
        <div class="text-caption text-weight-medium">
          {{ character.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterCard",

  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
});
</script>

<style lang="scss" scoped>
#character-card {
  background: #efefef;
  width: 340px;
  height: auto;
  border-radius: 30px;
  flex-direction: column;
  flex-wrap: nowrap;

  .top-content {
    margin: 0 auto;
    width: 238px;
    height: 100%;
    border-radius: 30px;
    border: 2px solid #000;

    img {
      width: 100%;
      height: 100%;
      border-radius: 30px;
    }
  }

  .bottom-content {
    margin: 10px auto 0 auto;
    .character-name {
      background: #87f54e;
      border-radius: 30px;
      width: 238px;
      height: auto;
      text-align: center;
    }
  }
}
</style>
