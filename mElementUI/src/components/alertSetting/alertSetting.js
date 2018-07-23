import AlertSetting from './src/alertSetting'

// 单组件注册
AlertSetting.install = function (Vue) {
  Vue.component(AlertSetting.name, AlertSetting);
}
export default AlertSetting;
