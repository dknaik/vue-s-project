const HomeRoute = [
  {
    path: "/home",
    name: "home",
    component: () => import("../../views/Home/Home.vue"),
    meta: {
        layout: "main-layout",
      },
  },
];

export default HomeRoute