const loginRoute = [
  {
    path: "/",
    name: "login",
    component: () => import("../../views/Login/Login.vue"),
    meta: {
      layout: "blank-layout",
    },
  },
];
export default loginRoute