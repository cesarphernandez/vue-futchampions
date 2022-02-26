import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Styles
import "@/assets/css/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// Sweet Alets
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App).use(store).use(VueSweetalert2).use(router).mount("#app");
