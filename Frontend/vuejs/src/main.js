import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = 'http://localhost:5000';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
