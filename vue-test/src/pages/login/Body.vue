<template>
  <div id="app">
    <h2>hello world</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Body'
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
