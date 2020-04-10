<template>
  <div id="app">
    <h1 class="title">{{title}}</h1>
    <display-info />
  </div>
</template>

<script>
import DisplayInfo from './components/DisplayInfo.vue'

export default {
  name: 'App',
  data() {
    return {
      title: "Current COVID-19 Information in Malaysia"
    }
  },
  components: {
    // HelloWorld
    DisplayInfo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
