const registerRoute = [
  {
    path: "/register",
    name: "register",
    component: () => import("../../views/Register/Register.vue"),
    meta:{
        layout:"blank-layout"
    }
  },
];
export default registerRoute
