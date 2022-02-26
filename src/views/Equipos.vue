<template>
  <div>
    <!-- Barra de progreso -->
    <div v-show="isLoading" class="vld-parent">
      <loading
        :active="isLoading"
        color="black"
        background-color="white"
        :height="90"
        :width="90"
        loader="dots"
        :is-full-page="true"
      />
    </div>
  </div>
  <div class="bg-white">
    <div class="flex justify-center pt-4">
      <div class="mb-3 xl:w-96 px-2">
        <label class="form-label inline-block mb-2 text-black font-bold"
          >Busqueda por Equipo</label
        >
        <input
          type="text"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-green-900 focus:outline-none"
          placeholder="Equipo"
          v-model="busquedaEquipo"
        />
        <label class="form-label inline-block mb-2 text-black text-sm pt-2"
          >Sugerencia: Real Madrid, Liverpool, FC Barcelona, Juventus ..</label
        >
      </div>
    </div>
    <div class="flex justify-center pt-4">
      <button
        class="bg-black px-3 py-2 text-white font-bold text-sm rounded-md hover:bg-red-800"
        @click="validarDatosBoton()"
      >
        Buscar
      </button>
    </div>
    <div v-if="validarTabla" class="flex justify-center p-4 pt-0">
      <div class="sm:mx-6 lg:mx-8 md:w-3/4 sm:w-full">
        <div class="min-w-full py-4 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <thead class="border-t bg-black rounded-md">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-bold text-white px-3 py-3"
                  >
                    Avatar
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold text-white px-3 py-3"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold text-white px-3 py-3"
                  >
                    Posicion
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-bold text-white px-3 py-3"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(jugador, i) in jugadores" :key="i">
                  <tr
                    v-if="jugador.active"
                    class="bg-blue-900 text-white hover:text-white"
                    @click="abrirJugador(i)"
                  >
                    <td
                      class="flex justify-center font-light px-3 py-3 whitespace-nowrap"
                    >
                      <img
                        id="img1"
                        src="../assets/EaXs.png"
                        class="img-fluid"
                        alt="Responsive image"
                        height="20"
                        style="max-width: 80%"
                      />
                    </td>

                    <td class="text-sm font-light px-3 py-3 whitespace-nowrap">
                      {{ jugador.nombre_jugador }}
                    </td>
                    <td class="text-sm font-light px-3 py-3 whitespace-nowrap">
                      <span class="bg-red-800 text-white p-1 rounded-md">
                        {{ jugador.posicion }}
                      </span>
                    </td>
                    <td class="text-sm font-light px-3 py-3 whitespace-nowrap">
                      <i class="bi bi-arrow-up-short"></i>
                    </td>
                  </tr>
                  <tr
                    v-if="!jugador.active"
                    class="bg-white hover:bg-green-500 hover:text-white"
                    @click="abrirJugador(i)"
                  >
                    <td
                      class="flex justify-center font-light px-3 py-3 whitespace-nowrap"
                    >
                      <img
                        id="img1"
                        src="../assets/EaXs.png"
                        class="img-fluid"
                        alt="Responsive image"
                        height="20"
                        style="max-width: 80%"
                      />
                    </td>

                    <td
                      class="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap"
                    >
                      {{ jugador.nombre_jugador }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap"
                    >
                      <span class="bg-red-800 text-white p-1 rounded-md">
                        {{ jugador.posicion }}
                      </span>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-3 py-3 whitespace-nowrap"
                    >
                      <i class="bi bi-arrow-down-short"></i>
                    </td>
                  </tr>
                  <tr
                    v-show="jugador.active"
                    class="text-sm bg-red-800 text-white py-4"
                  >
                    <td
                      class="flex justify-center font-light px-3 py-3 whitespace-nowrap"
                    >
                      {{ "RATING: " + jugador.rating }}
                    </td>
                    <td>{{ "PAIS: " + jugador.pais }}</td>
                    <td
                      class="flex justify-center font-light px-3 py-3 whitespace-nowrap"
                    >
                      {{ "CLUB: " + jugador.club }}
                    </td>
                    <td></td>
                  </tr>
                  <tr
                    v-show="jugador.active"
                    class="text-sm bg-red-800 text-white py-4"
                  >
                    <td
                      class="flex justify-center font-light px-3 py-3 whitespace-nowrap"
                    >
                      {{ "PIERNA: " + jugador.pierna }}
                    </td>
                    <td>{{ "EDAD: " + jugador.edad }}</td>
                    <td
                      class="flex justify-center font-light px-3 py-3 whitespace-nowrap"
                    ></td>
                    <td></td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-if="validarTabla" class="flex justify-center p-4">
      <v-pagination
        class="text-white"
        v-model="page"
        :pages="totalPages"
        :range-size="2"
        active-color="black"
        @update:modelValue="validarDatosPaginador()"
        :hideLastButton="true"
      />
    </div>
    <div
      v-if="validarTabla == null"
      class="flex text-md font-bold justify-center py-4"
    >
      Debes escribir el nombre del equipo para buscar jugadores
    </div>
    <div
      v-if="validarTabla == false"
      class="flex text-md font-bold justify-center py-4"
    >
      Los datos de los jugadores no se pudieron cargar
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import Loading from "vue3-loading-overlay/dist/index";
import ApiJugadores from "@/services/ApiFifa";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
// Init plugin
export default {
  name: "Home",
  data() {
    return {
      isLoading: false,
      jugadores: [],
      active: false,
      page: 1,
      totalPages: 0,
      busquedaEquipo: "",
      validarTabla: null,
      ordenBusqueda: "ASC",
    };
  },
  created() {},
  components: {
    VPagination,
    Loading,
  },
  methods: {
    alertDialog(title, message, type) {
      this.$swal({
        title: "<h1 style='color:white'>" + title + "</h1>",
        text: message,
        icon: type,
        confirmButtonColor: "#42b983",
        background: "black",
        iconColor: "#fff",
        showCancelButton: false,
        confirmButtonText: "Aceptar",
        datosApi: "",
      });
    },
    abrirJugador(posicion) {
      this.jugadores[posicion].active = !this.jugadores[posicion].active;
      for (let i = 0; i < this.jugadores.length; i++) {
        if (i !== posicion) {
          this.jugadores[i].active = false;
        }
      }
      console.log(this.jugadores[posicion]);
    },
    validarDatosPaginador() {
      this.datosApi = {
        page: this.page,
        name: this.busquedaEquipo,
      };
      this.listarJugadores();
    },
    validarDatosBoton() {
      if (this.busquedaEquipo == "") {
        this.alertDialog(
          "Atención",
          "Debes digitar en el campo de busqueda",
          "info"
        );
      } else {
        this.datosApi = {
          page: 1,
          name: this.busquedaEquipo,
        };
        this.listarJugadores();
        this.page = 1;
      }
    },
    async listarJugadores() {
      this.isLoading = true;
      var response;
      await ApiJugadores.TraerPorEquipos(this.datosApi)
        .then((respuesta) => {
          response = respuesta;
          this.isLoading = false;
          if (response.data.totalItems != 0) {
            this.totalPages = response.data.TotalPages;
            this.validarTabla = true;
            this.jugadores = response.data.players;
            for (let i = 0; i < this.jugadores.length; i++) {
              this.jugadores[i].active = false;
            }
          } else {
            this.alertDialog(
              "Atención",
              "No hay jugadores para esta busqueda",
              "info"
            );
            this.validarTabla = false;
            this.jugadores = [];
          }
        })
        .catch((error) => {
          this.isLoading = false;
          this.alertDialog("Error", "Algo salio mal con la solciitud", "info");
          console.log(error);
        });
      console.log(response);
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
.swal2-html-container {
  color: #fff !important;
}
.swal2-container.swal2-center .swal2-popup {
  border-radius: 20px;
}
.Page-active {
  color: #fff !important;
}
</style>
