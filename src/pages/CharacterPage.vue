<template>
  <main-layout :hasLoading="hasRequest">
    <template v-slot:content>
      <div id="character-page" class="flex justify-center q-mt-xl">
        <character-infos :character="character" />
      </div>
    </template>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { CHARACTER } from "src/graphql/characters";
import MainLayout from "src/layouts/MainLayout.vue";
import CharacterInfos from "src/components/CharacterInfos/CharacterInfos.vue";

export default defineComponent({
  name: "CharacterPage",

  components: { MainLayout, CharacterInfos },

  data() {
    return {
      response: {},
      character: {},
      hasRequest: true,
    };
  },

  created() {
    this.getCharacter();
  },

  watch: {
    response(result) {
      if (result) {
        this.character = result.character;

        setTimeout(() => {
          this.hasRequest = false;
        }, 1100);
      }
    },
  },

  methods: {
    async getCharacter() {
      try {
        const response = await useQuery(CHARACTER, {
          id: this.$route.params.id,
        });

        this.response = response.result;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  #character-page {
    margin-top: 0;
  }
}
</style>
