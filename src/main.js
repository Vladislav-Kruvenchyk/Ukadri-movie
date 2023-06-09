import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import '@/css/public/global/styleguide.css'
import '@/css/src/styleguide.css'
import '@/css/app.sass'
import '@/css/main.css'
import VueMask from 'v-mask'
import Carousel3d from 'vue-carousel-3d';
import VueAxios from "vue-axios";
import axios from "axios";
import ripple from 'v-ripple-effect';
import VueVisible from 'vue-visible';
Vue.use(VueVisible);
Vue.use(VueAxios, axios)
Vue.use(Carousel3d);
Vue.use(VueMask);
Vue.use(ripple);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
