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
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
