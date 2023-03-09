<template>
  <div
    id="character-infos"
    class="shadow-4 flex column animate__animated animate__fadeIn"
  >
    <div class="top-content flex row justify-between q-pa-md">
      <img class="character-image" :src="character.image" />

      <div class="character-properties q-pa-md flex column justify-around">
        <div class="text-subtitle2"><b>Name:</b> {{ character.name }}</div>

        <div class="text-subtitle2">
          <b>Species:</b> {{ character.species }}
        </div>

        <div class="text-subtitle2"><b>Gender:</b> {{ character.gender }}</div>

        <div class="text-subtitle2">
          <b>Location:</b> {{ character.location.name }}
        </div>

        <div class="text-subtitle2"><b>Status:</b> {{ character.status }}</div>
      </div>
    </div>

    <div class="bottom-content q-mt-sm q-px-md q-py-sm">
      <div class="text-caption">
        Appears in <b>{{ character.episode.length }}</b> episodes
      </div>

      <q-list bordered separator class="episodes-list q-mt-sm">
        <q-item v-for="episode in character.episode" :key="episode.id">
          <q-item-section>
            <b>{{ episode.name }}</b> {{ episode.episode }}
          </q-item-section>

          <q-item-section side>{{ episode.air_date }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import "animate.css";
import { defineComponent } from "vue";

export default defineComponent({
  name: "CharacterInfos",

  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
});
</script>

<style lang="scss" scoped>
#character-infos {
  width: 100vw;
  max-width: 650px;
  height: 600px;
  border-radius: 30px 30px 0 0;
  background: #ededed;

  .top-content {
    height: 280px;
    .character-image {
      width: 250px;
      height: 250px;
      border-radius: 30px 0 30px 0;
      border: 2px solid #000000;
    }

    .character-properties {
      height: 250px;
      width: calc(100% - 265px);
      background: #87f54e;
      border-radius: 0 30px 0 30px;

      border: 2px solid #000000;
    }
  }

  .bottom-content {
    background: #87f54e;
    height: calc(100% - 288px);
    border: 2px solid #000000;

    .episodes-list {
      max-height: 272px;
      overflow-x: hidden;
    }

    .episodes-list::-webkit-scrollbar {
      width: 5px;
    }

    .episodes-list::-webkit-scrollbar-track {
      background: transparent;
    }

    .episodes-list::-webkit-scrollbar-thumb {
      background-color: rgba(128, 128, 128, 0.767);
      border-radius: 20px;
    }
  }
}

@media (max-width: 600px) {
  #character-infos {
    width: 100vw;
    max-width: 100vw;
    height: calc(100vh - 80px);
    border-radius: 0;
    flex-wrap: nowrap;

    .top-content {
      height: 450px;
      width: 100vw;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      .character-image {
        width: 300px;
        height: 250px;
        border-radius: 30px 30px 0 0;
      }

      .character-properties {
        height: 250px;
        width: 300px;
        border-radius: 0px;
      }
    }

    .bottom-content {
      height: calc(100% - 260px);
    }
  }
}
</style>
