export default [
  {
    path: "/home",
    name: "Home",
    icon: "home",
    component: "./Home",
  },
  {
    name: "Information",
    icon: "formation",
    path: "/information",
    component: "./Information",
  },

  {
    path: "/",
    redirect: "/home",
  },
];
