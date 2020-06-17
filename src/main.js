import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = true;


export const EventBus =  new Vue();

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
