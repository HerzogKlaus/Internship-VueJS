import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import router from './routes'
Vue.use(VueRouter)
import VueMask from 'v-mask'
Vue.use(VueMask);
import '../css/style.css'
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store,
}).$mount('#app')
