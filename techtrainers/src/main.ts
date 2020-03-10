import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// styles
import './scss/default.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
