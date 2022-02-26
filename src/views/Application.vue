<template>
  <Transition name="bounce">
    <div v-if="start == 2">
      <div class="d-flex justify-content-center py-2">
        <img
          id="img1"
          src="../assets/logoFifa.png"
          class="img-fluid"
          alt="Responsive image"
          height="20"
          style="max-width: 80%"
        />
        <img
          id="img2"
          src="../assets/fifaXs2.png"
          class="img-fluid"
          alt="Responsive image"
          height="20"
          style="max-width: 80%"
        />
      </div>
      <div id="nav">
        <div class="text-white font-bold py-4">Busqueda por</div>
        <div class="d-flex justify-content-center pb-4">
          <div class="py-2 px-4" id="nav">
            <router-link
              to="/"
              class="py-2 px-4 bg-blue-900 hover:bg-red-800 text-white text-md no-underline rounded-md"
            >
              JUGADORES
            </router-link>
          </div>
          <div class="py-2 px-4">
            <router-link
              to="/equipos"
              class="py-2 px-4 bg-blue-900 hover:bg-red-800 text-white text-md no-underline rounded-md"
            >
              EQUIPOS
            </router-link>
          </div>
        </div>
      </div>
      <router-view />
      <footer class="text-center bg-gray-900 text-white mt-auto">
        <div class="container px-6 pt-6">
          <div class="mb-6 text-xs">
            <p>JUGADORES FIFA 21 FUT CHAMPIONS</p>
          </div>
        </div>

        <div class="text-center text-xs p-4 bg-black">
          © 2021 | cesarphernandez
        </div>
      </footer>
    </div>
  </Transition>
  <Transition name="bounce">
    <div
      v-if="!start"
      class="loginBg"
      :class="'d-flex row justify-content-center overflow-hidden'"
    >
      <div class="flex items-center justify-content-center">
        <img
          src="../assets/FutChampions-Logo.png"
          class="img-fluid max-w-md"
          alt="Responsive image"
        />
      </div>
      <div>
        <button
          class="bg-white px-3 py-2 text-black font-bold text-lg rounded-md hover:bg-red-800 hover:text-white"
          @click="iniciar()"
        >
          COMENZAR
        </button>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      start: false,
    };
  },
  methods: {
    async iniciar() {
      this.start = true;
      setTimeout(() => (this.start = 2), 700);
    },
  },
};
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.loginBg {
  height: 100vh;
  background-size: cover;
}
#img1 {
  display: block;
}
#img2 {
  display: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  background-color: #42b983 !important;
}

@media all and (max-width: 499px) {
  #img1 {
    display: none;
  }
  #img2 {
    display: block;
  }
}
</style>
<style>
/* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(128, 128, 128, 0);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(131, 131, 131, 0.521);
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #2c3e50;
}
</style>
