<script>
import { mapActions } from 'vuex'
import debounce from 'lodash-es/debounce'

export default {
  name: 'ResizeMixin',
  mounted () {
    window.addEventListener('resize', debounce(this.resizeEventListener, 100))
    this.resizeEventListener()
  },
  methods: {
    ...mapActions({
      setWindowSize: 'app/setWindowSize'
    }),
    resizeEventListener () {
      const height = window.innerHeight
      const width = window.innerWidth
      this.setWindowSize({
        height,
        width
      })
      // Set custom --vh for mobile display sizes
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>
