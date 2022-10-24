import * as C from './constants'

export default {

  /**
   * @param commit
   * @param payload
   */
  setWindowSize ({ commit }, payload) {
    commit(C.APP_WINDOW_SET, payload)
  }
}
