<script>
export default {
  name: 'TrackingMixin',
  data () {
    return {
      analyticsArr: [],
      consent: null
    }
  },
  created () {
    this.consent = this.$cookies.get('cookie_consent')
    if (this.consent) {
      this.enableGA()
    } else {
      this.disableGA()
    }
  },
  mounted () {
    if (this.consent && this.consent.facebook) {
      this.enableFB()
    } else {
      this.disableFB()
    }
  },
  methods: {
    enableGA () {
      this.$config.googleAnalytics.disabled = !this.consent.google
      if (process.client) {
        this.$ga.enable()
      }
    },
    disableGA () {
      this.$config.googleAnalytics.disabled = true
      if (process.client) {
        this.$ga.disable()
      }
    },
    enableFB () {
      this.$fb.enable()
    },
    disableFB () {
      this.$fb.disable()
    }
  }
}
</script>
