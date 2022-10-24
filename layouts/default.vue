<script>
import ResizeMixin from '../mixins/ResizeMixin'

export default {
  name: 'App',
  mixins: [ResizeMixin]
}
</script>

<template>
  <div id="app" class="app">
    <!--    <div class="app__navigation">-->
    <!--      <au-navigation />-->
    <!--    </div>-->
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
