// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// import AlertSetting from './comp/alertSetting/alertSetting.js'
import mElementUI from '../src/mElementUI'
// import '../src/theme/alertSetting.css';
import '../src/theme/mElementUI.scss';

Vue.use(mElementUI);
// Vue.use(AlertSetting);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
