import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';


Vue.use(VueResource);
Vue.use(VueRouter);

// Com auxilio do VueRouter vamos passar as rota pra ele e irá devolver um roteador para usar na aplicação
const router = new VueRouter({
  routes: routes,
  mode: 'history' //Retirar o # da url quando fazer mudar de routa
})

new Vue({
  el: '#app',
  router: router, //fazer parte da vue instance
  render: h => h(App)
})
