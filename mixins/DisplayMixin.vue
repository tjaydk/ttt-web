<script>
export default {
  methods: {
    loadAsJpg () {
      if (process.client) {
        // List known supported browsers
        const supportedBrowsers = [
          'Chrome',
          'Edge',
          'Firefox'
        ]
        // List of known supported OS
        const supportedOS = [
          'Windows 7',
          'Windows 8',
          'Windows 10'
        ]
        const browser = this.$ua.browser()
        const os = this.$ua.os()
        const hasSupport = supportedBrowsers.includes(browser) && supportedOS.includes(os)
        return !hasSupport
      } else {
        return true
      }
    }
  }
}
</script>
