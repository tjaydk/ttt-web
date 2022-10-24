import * as C from './constants'

export default {

  /**
   * @param commit
   * @param payload
   */
  async forgotPassword ({ commit }, payload) {
    commit(C.AUTH_FORGOT_PENDING)
    await this.$axios.post('/forgot-password', payload, {
      baseURL: process.env.PUBLIC_URL
    })
      .then(() => {
        commit(C.AUTH_FORGOT_SUCCESS)
      }).catch((err) => {
        commit(C.AUTH_FORGOT_FAILURE, err.response.data.message)
      })
  },

  /**
   * @param commit
   * @param payload
   */
  async resetPassword ({ commit }, payload) {
    commit(C.AUTH_RESET_PENDING)
    await this.$axios.post('/reset-password', payload, {
      baseURL: process.env.PUBLIC_URL
    })
      .then(() => {
        commit(C.AUTH_RESET_SUCCESS)
      }).catch((err) => {
        commit(C.AUTH_RESET_FAILURE, err.response.data.message)
      })
  }
}
