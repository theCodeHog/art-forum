import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faTimes, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./globalStyles.scss";

library.add(faUserSecret, faTimes, faLock);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
