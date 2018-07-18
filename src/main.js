import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import Toasted from 'vue-toasted';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VeeValidate);
Vue.use(Toasted);

new Vue({
  el: '#app',
  render: h => h(App)
})
