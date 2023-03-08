<template>
  <div id="header" class="flex row q-px-md">
    <div class="logo-content flex items-center" @click="redirectTo('/')">
      <img
        src="src/assets/logo.svg"
        class="logo cursor-pointer platform__animation__scale_1-1"
      />
    </div>

    <div class="links-content-desktop q-ml-md flex items-center">
      <div
        class="link-text text-subtitle1 text-white q-px-md cursor-pointer text-weight-medium platform__animation__scale_1-05"
        v-for="link in links"
        :key="link.id"
        @click="redirectTo(link.route)"
      >
        {{ link.name }}
      </div>
    </div>

    <div class="menu-icon-mobile cursor-pointer">
      <q-icon
        name="menu"
        color="white"
        size="2em"
        @click="showMobileMenu = !showMobileMenu"
      />
    </div>
  </div>

  <q-dialog
    v-model="showMobileMenu"
    transition-show="slide-down"
    transition-hide="slide-up"
    position="top"
    :maximized="true"
  >
    <div class="mobile-menu flex justify-center">
      <div class="links-content-mobile flex column justify-around">
        <div
          class="link-text text-subtitle1 text-white text-weight-medium"
          v-for="link in links"
          :key="link.id"
          @click="redirectTo(link.route)"
        >
          {{ link.name }}
        </div>
      </div>
    </div>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",

  data() {
    return {
      links: [
        {
          id: 1,
          name: "Início",
          route: "/",
        },

        {
          id: 2,
          name: "Personagens",
          route: "/characters",
        },

        {
          id: 3,
          name: "Episódios",
          route: "/episodes",
        },
      ],
      showMobileMenu: false,
    };
  },

  methods: {
    redirectTo(route) {
      this.$router.push({ path: route });
    },
  },
});
</script>

<style lang="scss" scoped>
#header {
  height: 80px;
  width: 100vw;
  max-width: 1440px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0);

  .logo-content {
    height: 100%;
    width: 80px;
    .logo {
      height: 65px;
    }
  }

  .menu-icon-mobile {
    display: none;
  }
}

.mobile-menu {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.5px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0);
  height: 40vh;

  .links-content-mobile {
    .link-text {
      border-bottom: 1px solid #ffffff33;
    }
  }
}

@media (min-width: 1440px) {
  #header {
    border-radius: 0px 0px 30px 30px;
  }
}

@media (max-width: 600px) {
  #header {
    justify-content: space-between;
    .links-content-desktop {
      display: none;
    }

    .menu-icon-mobile {
      display: flex;
      align-items: center;
    }
  }
}
</style>
