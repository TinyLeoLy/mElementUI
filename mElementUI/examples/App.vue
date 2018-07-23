<template>
  <div id="app">
    <img src="./assets/logo.png">
    <alert-setting></alert-setting>
    <router-view/>
  </div>
</template>

<script>
  // import AlertSetting from './comp/alertSetting/alertSetting.js'

  export default {
    name: 'App',
    components: {
      // AlertSetting
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
