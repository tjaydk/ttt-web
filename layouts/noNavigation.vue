<script>
import ResizeMixin from '../mixins/ResizeMixin'

export default {
  name: 'App',
  mixins: [ResizeMixin],
  transition: 'test'
}
</script>

<template>
  <div id="app" class="app">
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.app {
  position: relative;

  &__navigation {
    position: fixed;
    top: 20px;
    left: 0;
    width: 100%;
    z-index: 99;
  }
}
</style>
