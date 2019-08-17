import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router/index'
import i18n from './i18n'

// 
Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  i18n,
  router,
  template: '<App/>',
  components: {
    App
  }
})
