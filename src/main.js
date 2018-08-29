// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n=new VueI18n({
	locale:'CN',
	messages:{
		'CN':require('../static/js/cn'),
		'EN':require('../static/js/en')
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
