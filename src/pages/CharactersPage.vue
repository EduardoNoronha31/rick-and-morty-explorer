<template>
  <main-layout>
    <template v-slot:content>
      <div
        id="characters-page"
        class="flex row justify-around q-pt-md"
        v-if="!loading"
      >
        <character-card
          :character="character"
          v-for="character in result.characters.results"
          :key="character.id"
        />
      </div>
    </template>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useQuery } from "@vue/apollo-composable";
import MainLayout from "src/layouts/MainLayout.vue";
import { ALL_CHARACTERS } from "src/graphql/characters";
import CharacterCard from "src/components/CharacterCard/CharacterCard.vue";

export default defineComponent({
  name: "CharactersPage",

  components: { MainLayout, CharacterCard },

  setup() {
    const { result, loading } = useQuery(ALL_CHARACTERS);

    return { result, loading };
  },
});
</script>

<style lang="scss" scoped>
#characters-page {
  max-height: calc(100vh - 80px);
  overflow-x: hidden;
}

#characters-page::-webkit-scrollbar {
  width: 5px;
}

#characters-page::-webkit-scrollbar-track {
  background: transparent;
}

#characters-page::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.767);
  border-radius: 20px;
}
</style>
