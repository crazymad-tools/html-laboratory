<template>
  <div v-show="isShow" class="dialog">
    <h2 v-text="message">hello</h2>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data: () => {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss">
  .dialog {
    position: fixed;
    margin: auto auto;
    background: rgba(87, 87, 87, 0.55);
    color: white;
    padding: 10px;
  }
</style>
