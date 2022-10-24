import { set } from 'vue'
import * as C from './constants'

export default {

  /**
   * @param state
   */
  [C.GAME_INDEX_PENDING] (state) {
    set(state, 'index', {
      loading: true,
      error: null,
      noContent: false,
      items: []
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_INDEX_SUCCESS] (state, payload) {
    set(state, 'index', {
      loading: false,
      error: null,
      noContent: false,
      items: payload
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_INDEX_FAILURE] (state, payload) {
    set(state, 'index', {
      loading: false,
      error: payload,
      noContent: false,
      items: []
    })
  },

  /**
   * @param state
   */
  [C.GAME_INDEX_NO_CONTENT] (state) {
    set(state, 'index', {
      loading: false,
      error: false,
      noContent: true,
      items: []
    })
  },

  /**
   * @param state
   */
  [C.GAME_CREATE_PENDING] (state) {
    set(state, 'create', {
      item: null,
      loading: true,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_CREATE_SUCCESS] (state, payload) {
    set(state, 'create', {
      item: payload,
      loading: false,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_CREATE_FAILURE] (state, payload) {
    set(state, 'create', {
      item: null,
      loading: false,
      error: payload
    })
  },

  /**
   * @param state
   */
  [C.GAME_RESTART_PENDING] (state) {
    set(state, 'restart', {
      loading: true,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_RESTART_SUCCESS] (state, payload) {
    set(state, 'restart', {
      loading: false,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_RESTART_FAILURE] (state, payload) {
    set(state, 'restart', {
      loading: false,
      error: payload
    })
  },

  /**
   * @param state
   */
  [C.GAME_DELETE_PENDING] (state) {
    set(state, 'delete', {
      loading: true,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_DELETE_SUCCESS] (state, payload) {
    set(state, 'delete', {
      loading: false,
      error: null
    })
  },

  /**
   * @param state
   * @param payload
   */
  [C.GAME_DELETE_FAILURE] (state, payload) {
    set(state, 'delete', {
      loading: false,
      error: payload
    })
  }
}
