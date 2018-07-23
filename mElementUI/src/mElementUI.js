import AlertSetting from './components/alertSetting/alertSetting'

const components = [
  AlertSetting,
];

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const mElementUI = {
  version: '0.0.1',
  install,
  AlertSetting,
}

export default mElementUI;
