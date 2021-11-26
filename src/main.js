import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap"; // ← Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import vuetify from "./plugins/vuetify";

import jQuery from "jquery"; // ← JQuery
window.$ = window.jQuery = jQuery;
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";
import "popper.js";

// Components
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";



Vue.component("Hero", Hero);
Vue.component("Contact", Contact);
Vue.component("Menu", Menu);
Vue.component("Reviews", Reviews);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
