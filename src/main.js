import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import Toasted from 'vue-toasted';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Icon from 'vue-awesome/components/Icon.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-awesome/icons'
import 'swiper/dist/css/swiper.css'



Vue.use(VueAwesomeSwiper)
Vue.component('icon', Icon);
Vue.use(VeeValidate);
Vue.use(Toasted);

new Vue({
  el: '#app',
  render: h => h(App)
})
