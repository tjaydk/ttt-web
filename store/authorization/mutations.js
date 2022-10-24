import { set } from 'vue'
import * as C from './constants'

export default {

  /**
   * @param state
   */
  [C.AUTH_FORGOT_PENDING] (state) {
    set(state, 'forgot', {
      loading: true,
      error: null
    })
  },

  /**
   * @param state
   */
  [C.AUTH_FORGOT_SUCCESS] (state) {
    set(state, 'forgot', {
      loading: false,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.AUTH_FORGOT_FAILURE] (state, payload) {
    set(state, 'forgot', {
      loading: false,
      error: payload
    })
  },
  /**
   * @param state
   */
  [C.AUTH_RESET_PENDING] (state) {
    set(state, 'reset', {
      loading: true,
      error: null
    })
  },

  /**
   * @param state
   */
  [C.AUTH_RESET_SUCCESS] (state) {
    set(state, 'reset', {
      loading: false,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.AUTH_RESET_FAILURE] (state, payload) {
    set(state, 'reset', {
      loading: false,
      error: payload
    })
  }
}
