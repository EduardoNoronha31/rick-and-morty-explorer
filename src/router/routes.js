const routes = [
  {
    path: "/",
    component: () => import("src/pages/Home.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
