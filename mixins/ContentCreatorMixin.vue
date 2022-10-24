<script>
export default {
  name: 'ContentCreatorMixin',
  beforeMount () {
    if (!this.$auth.user || !this.$auth.user.contentCreator) {
      this.$router.push('/')
    }
  }
}
</script>
