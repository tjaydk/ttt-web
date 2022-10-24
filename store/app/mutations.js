import { set } from 'vue'
import * as C from './constants'

export default {

  /**
   * @param state
   * @param payload
   */
  [C.APP_WINDOW_SET] (state, payload) {
    set(state, 'window', payload)
  }
}
