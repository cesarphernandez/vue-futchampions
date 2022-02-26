import { createRouter, createWebHistory } from "vue-router";
import Jugadores from "@/views/Jugadores.vue";
import Equipos from "@/views/Equipos.vue";
import Error from "@/views/Error";

const routes = [
  {
    path: "/",
    name: "Jugadores",
    component: Jugadores,
  },
  {
    path: "/equipos",
    name: "Equipos",
    component: Equipos,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
