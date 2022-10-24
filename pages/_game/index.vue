<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GamePage',
  transition: 'test',
  async asyncData ({ params, $axios, redirect }) {
    try {
      const game = await $axios.$get(`/games/${params.game}`)
      return { game }
    } catch (e) {
      return redirect('/')
    }
  },
  computed: {
    ...mapState({
      games: state => state.game.index.items
    })
  },
  created () {
    this.getGameIndex()
  },
  methods: {
    ...mapActions({
      getGameIndex: 'game/getGameIndex',
      restartGame: 'game/restartGame',
      deleteGame: 'game/deleteGame',
      setPiece: 'game/setPiece',
      checkForVictory: 'game/checkForVictory'
    }),
    async handlePlace (vector) {
      if (!this.game.victory) {
        await this.setPiece({ id: this.game.id, piece: this.game.currentTurn, vector })
        await this.checkForVictory({ id: this.game.id })
        this.$nuxt.refresh()
      }
    },
    async handleRestart () {
      await this.restartGame({ id: this.game.id })
      this.$nuxt.refresh()
    },
    async handleDelete () {
      await this.deleteGame({ id: this.game.id })
      this.$nuxt.refresh()
    }
  }
}
</script>

<template>
  <div class="game-page">
    <div class="game-page__content">
      <div class="game-page__meta">
        <div class="game-page__meta-turn">
          Turn: {{ game.currentTurn }}
        </div>
        <div class="game-page__meta-score">
          X: {{ game.score.x }}
        </div>
        <div class="game-page__meta-score">
          O: {{ game.score.o }}
        </div>
      </div>
      <tic-board
        v-if="game"
        :game="game"
        @place="handlePlace"
      />
      <div class="game-page__controls">
        <div class="game-page__button" @click="handleRestart">
          Restart
        </div>
        <div class="game-page__button" @click="handleDelete">
          Delete
        </div>
        <router-link to="/" class="game-page__button">
          Back
        </router-link>
      </div>
      <div v-if="game.victory" class="game-page__modal" @click="handleRestart">
        <div class="game-page__modal-meta">
          <h1 class="game-page__modal-title">
            Victory!!!
          </h1>
          <p class="game-page__modal-value">
            Contgratulations: {{ game.victory }}
          </p>
          <p class="game-page__modal-value">
            Click screen to go again
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "index";
</style>
