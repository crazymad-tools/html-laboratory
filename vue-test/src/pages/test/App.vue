<template>
  <div id="app">
    <div id="clickA" @click="getPos"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getPos: function (event) {
      let el = this.$el
      // let elementX = el.getBoundingClientRect().left
      // let elementY = el.getBoundingClientRect().top
      let elementX = el.offsetLeft
      let elementY = el.offsetHeight
      console.log('elementX:' + elementX + ' elementY:' + elementY)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  widh: 700px;
  height: 1500px;
}
#clickA {
  position: absolute;
  box-shadow: 0 0 5px gray;
  top: 200px;
  left: 500px;
  width: 100px;
  height: 100px;
}
</style>
