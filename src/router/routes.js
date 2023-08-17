const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/experience",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/WorkExp.vue") }],
  },
  {
    path: "/projects",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        props: true,
        component: () => import("src/pages/MyProjects.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
