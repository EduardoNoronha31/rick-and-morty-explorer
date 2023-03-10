<template>
  <main-layout :hasLoading="areOnTheFirstRequest">
    <template v-slot:content>
      <div id="characters-page">
        <div class="characters-search flex items-center justify-end q-px-md">
          <q-input
            class="input-search q-mt-sm animate__animated animate__fadeIn"
            color="green"
            bg-color="white"
            rounded
            outlined
            debounce="500"
            label="Search for characters"
            :loading="hasScrollLoading"
            v-model="search"
            @update:model-value="searchUpdate($event)"
          >
            <template v-slot:append>
              <q-avatar>
                <q-icon name="search" size="1.4em" />
              </q-avatar>
            </template>
          </q-input>
        </div>

        <div
          class="characters-content flex row justify-evenly"
          @scroll="getNextCharacters($event)"
        >
          <character-card
            :character="character"
            :key="character.id"
            v-for="character in characters"
          />
        </div>
      </div>
    </template>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { ALL_CHARACTERS } from "src/graphql/characters";
import MainLayout from "src/layouts/MainLayout.vue";
import CharacterCard from "src/components/CharacterCard/CharacterCard.vue";

export default defineComponent({
  name: "CharactersPage",

  components: { MainLayout, CharacterCard },

  data() {
    return {
      search: "",
      page: 1,
      response: {},
      characters: [],
      totalPages: null,
      areOnTheFirstRequest: false,
      hasScrollLoading: false,
    };
  },

  created() {
    this.areOnTheFirstRequest = true;
    this.getCharacters();
  },

  watch: {
    response(result) {
      if (result) {
        this.totalPages = result.characters.info.pages;
        const characters = result.characters.results;

        if (this.page === 1) {
          this.characters = result.characters.results;
        } else {
          this.characters = this.characters.concat(characters);
        }

        this.areOnTheFirstRequest = false;
        this.hasScrollLoading = false;
      }
    },
  },

  methods: {
    async getCharacters() {
      this.result = {};

      try {
        const response = await useQuery(ALL_CHARACTERS, {
          page: this.page,
          filter: {
            name: this.search,
          },
        });

        this.response = response.result;
      } catch (error) {
        console.log(error);
      }
    },

    getNextCharacters(event) {
      const isItAtTheEndOfTheScroll =
        event.target.scrollTop + event.target.clientHeight >=
        event.target.scrollHeight - 200;

      if (isItAtTheEndOfTheScroll && this.page < this.totalPages) {
        this.incrementPage();
        this.getCharacters();
      }
    },

    incrementPage() {
      this.page += 1;
    },

    searchUpdate(value) {
      this.hasScrollLoading = true;
      this.page = 1;
      this.search = value;
      this.resetScroll();
      this.getCharacters();
    },

    resetScroll() {
      const scrollArea = document.querySelector(".characters-content");

      if (!scrollArea) {
        return;
      }

      scrollArea.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
});
</script>

<style lang="scss" scoped>
#characters-page {
  max-height: calc(100vh - 80px);

  .characters-search {
    height: 100px;

    .input-search {
      width: 300px;
    }
  }
  .characters-content {
    max-height: calc(100vh - 180px);
    overflow-x: hidden;
  }

  .characters-content::-webkit-scrollbar {
    width: 5px;
  }

  .characters-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .characters-content::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.767);
    border-radius: 20px;
  }
}

@media (max-width: 600px) {
  #characters-page {
    .characters-search {
      justify-content: center;

      .input-search {
        width: 100%;
      }
    }
  }
}
</style>
