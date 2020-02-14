import Vue from 'vue'
import App from './App.vue'
import dragDirective from './directive/drag'
import readmoreFilter from './filter/readmore'
Vue.config.productionTip = false
Vue.use(dragDirective)
Vue.use(readmoreFilter)
new Vue({
  render: h => h(App),
}).$mount('#app')
