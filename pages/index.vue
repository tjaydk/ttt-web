<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  transition: 'test',
  computed: {
    ...mapState({
      games: state => state.game.index.items,
      game: state => state.game.create.item,
      loading: state => state.game.create.loading,
      error: state => state.game.create.error
    })
  },
  created () {
    this.getGameIndex()
  },
  methods: {
    ...mapActions({
      getGameIndex: 'game/getGameIndex',
      createGame: 'game/createGame'
    }),
    async handleCreate () {
      await this.createGame()
      if (!this.error) {
        this.$router.push(`/${this.game.id}`)
      }
    }
  }
}
</script>

<template>
  <div class="index-page">
    <div class="index-page__content">
      <div class="index-page__list">
        <div class="index-page__list-title">
          Current games
        </div>
        <div v-for="game in games" :key="game.id" class="index-page__list-item">
          <router-link :to="`/${game.id}`">
            {{ game.id }}
          </router-link>
        </div>
        <button class="index-page__list-button" :disabled="loading" @click.prevent="handleCreate">
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "index";
</style>
