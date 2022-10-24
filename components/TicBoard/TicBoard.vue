<script>
export default {
  name: 'TicBoard',
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  methods: {
    place (vector) {
      this.$emit('place', vector)
    }
  }
}
</script>

<template>
  <div class="tic-board">
    <div :class="{'tic-board__content--DISABLED': game.victory}" class="tic-board__content">
      <div
        v-for="(value, index) in game.board[0]"
        :key="`0,${index}`"
        class="tic-board__square"
        @click="place({ x: 0, y: index })"
      >
        {{ value }}
      </div>
      <div
        v-for="(value, index) in game.board[1]"
        :key="`1,${index}`"
        class="tic-board__square"
        @click="place({ x: 1, y: index })"
      >
        {{ value }}
      </div>
      <div
        v-for="(value, index) in game.board[2]"
        :key="`2,${index}`"
        class="tic-board__square"
        @click="place({ x: 2, y: index })"
      >
        {{ value }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "TicBoard";
</style>
