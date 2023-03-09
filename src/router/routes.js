const routes = [
  {
    path: "/",
    component: () => import("src/pages/HomePage.vue"),
  },

  {
    path: "/characters",
    component: () => import("src/pages/CharactersPage.vue"),
  },

  {
    path: "/characters/:id",
    component: () => import("src/pages/CharacterPage.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("src/pages/ErrorNotFound.vue"),
  },
];

export default routes;
