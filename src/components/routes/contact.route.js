const contactUs = [
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("../../views/Contact/Contact.vue"),
    meta: {
      layout: "main-layout",
    },
  },
];
export default contactUs;
