import Api from "@/services/Api";

export default {
  TraerJugadores(datos) {
    if (datos === "") {
      return Api().get("/jugadores");
    } else {
      return Api().get("/jugadores?" + datos);
    }
  },
  TraerPorEquipos(params) {
    return Api().post("/equipos", params);
  },
};
