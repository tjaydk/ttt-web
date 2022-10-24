import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash, faX, faCameraRetro, faMagnifyingGlass, faEllipsis, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faEye)
library.add(faEyeSlash)
library.add(faX)
library.add(faCameraRetro)
library.add(faMagnifyingGlass)
library.add(faEllipsis)
library.add(faPlus)
library.add(faPlusCircle)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
