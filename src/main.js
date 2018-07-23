import 'bootstrap/dist/css/bootstrap.css';
import 'vue-awesome/icons'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import App from './App.vue'
import Toasted from 'vue-toasted';
import Icon from 'vue-awesome/components/Icon.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.use(Toasted);
Vue.component('icon', Icon);
Vue.use(VueAwesomeSwiper);

new Vue({
  el: '#app',
  render: h => h(App)
});
