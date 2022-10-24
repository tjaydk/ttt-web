import * as C from './constants'

export default {

  /**
   * @param commit
   * @param payload
   */
  async getGameIndex ({ commit }) {
    commit(C.GAME_INDEX_PENDING)
    await this.$axios.get('/games')
      .then((res) => {
        if (res.status === 200) {
          commit(C.GAME_INDEX_SUCCESS, res.data)
        } else {
          commit(C.GAME_INDEX_NO_CONTENT)
        }
      }).catch((err) => {
        commit(C.GAME_INDEX_FAILURE, err.response.data.message)
      })
  },

  async createGame ({ commit }) {
    commit(C.GAME_CREATE_PENDING)
    await this.$axios.post('/games')
      .then((res) => {
        commit(C.GAME_CREATE_SUCCESS, res.data)
      }).catch((err) => {
        commit(C.GAME_CREATE_FAILURE, err.response.data.message)
      })
  },

  async restartGame ({ commit }, { id }) {
    commit(C.GAME_CREATE_PENDING)
    await this.$axios.post(`/games/${id}/restart`)
      .then((res) => {
        commit(C.GAME_CREATE_SUCCESS, res.data)
      }).catch((err) => {
        commit(C.GAME_CREATE_FAILURE, err.response.data.message)
      })
  },

  async deleteGame ({ commit }, { id }) {
    commit(C.GAME_CREATE_PENDING)
    await this.$axios.delete(`/games/${id}`)
      .then((res) => {
        commit(C.GAME_CREATE_SUCCESS, res.data)
      }).catch((err) => {
        commit(C.GAME_CREATE_FAILURE, err.response.data.message)
      })
  },

  async setPiece ({ commit }, { id, piece, vector }) {
    commit(C.GAME_INDEX_PENDING)
    await this.$axios.post(`/games/${id}/${piece}`, vector)
      .then((res) => {
        commit(C.GAME_INDEX_SUCCESS, res.data)
      }).catch((err) => {
        commit(C.GAME_INDEX_FAILURE, err.response.data.message)
      })
  },

  async checkForVictory ({ commit }, { id }) {
    commit(C.GAME_INDEX_PENDING)
    await this.$axios.get(`/games/${id}/check`)
      .then((res) => {
        commit(C.GAME_INDEX_SUCCESS, res.data)
      }).catch((err) => {
        commit(C.GAME_INDEX_FAILURE, err.response.data.message)
      })
  }
}
