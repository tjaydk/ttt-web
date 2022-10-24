<script>
import { keyBy } from 'lodash-es'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'NotificationMixin',
  data () {
    return {
      messageAudio: null,
      notificationObject: null
    }
  },
  computed: {
    ...mapState({
      loggedIn: state => state.auth.loggedIn,
      usersOnline: state => state.app.usersOnline,
      newMessages: state => state.app.newMessages
    })
  },
  watch: {
    loggedIn (val) {
      if (val) { this.connectToChannels() }
    }
  },
  mounted () {
    this.messageAudio = new Audio(require('@/assets/sounds/msg.mp3').default)
    this.connectToChannels()
    this.initializeOneSignalAPI()
    if (this.$auth.loggedIn) {
      this.getUnreadChatIds()
    }
  },
  methods: {
    ...mapActions({
      setUsersOnline: 'app/setUsersOnline',
      setUnreadChatIds: 'chat/setUnreadChatIds',
      getUnreadChatIds: 'chat/getUnreadChatIds'
    }),
    initializeOneSignalAPI () {
      if (this.$OneSignal && typeof this.$OneSignal.isPushNotificationsEnabled === 'function') {
        this.$OneSignal.push(() => {
          this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
            if (isEnabled) {
              // console.log('Push notifications are enabled!')
            } else {
              // console.log('Push notifications are not enabled yet.')
            }
          })
        })
      }
    },
    initializeNotificationsAPI (title, body, link) {
      if (!('Notification' in window)) {
        alert('This browser does not support desktop notification')
      } else if (Notification.permission === 'granted') {
        this.nonPersistentNotification(title, body, link)
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
          if (permission === 'granted') {
            this.nonPersistentNotification(title, body, link)
          }
        })
      }
    },
    nonPersistentNotification (title, body, link) {
      this.notificationObject = new Notification(title, {
        title,
        body,
        timestamp: new Date().getTime(),
        icon: require('@/assets/images/logofav40px.png'),
        requireInteraction: true,
        silent: true
      })
      if (link) {
        this.notificationObject.onclick = function () {
          window.open(link, '_blank')
        }
      } else {
        this.notificationObject.onclick = null
      }
    },
    connectToChannels () {
      this.$echo.join('global')
        .here((users) => {
          this.setUsersOnline(keyBy(users, 'userId'))
        })
        .joining((user) => {
          if (user.userId) {
            const users = { ...this.usersOnline }
            users[user.userId] = user
            this.setUsersOnline(users)
          }
        })
        .leaving((users) => {
          this.setUsersOnline(keyBy(users, 'userId'))
        })
      // If the user is logged in then listen on private notification channel
      if (this.$auth.loggedIn) {
        this.$echo.private(`notification.${this.$auth.user.userId}`)
          .on('notification.message.new', (notification) => {
            if (!notification.chatIds.includes(this.$route.params.id)) {
              this.setUnreadChatIds(notification.chatIds)
              if (notification.chatIds.length && !this.$route.path.includes('chat')) {
                // Add try catch to avoid error if user has not interacted with window first
                try {
                  this.messageAudio.play()
                } catch (e) {
                  // Do nothing
                }
                if (!document.hasFocus()) {
                  this.initializeNotificationsAPI(
                    this.$t('chat.overview.new_messages'),
                    this.$t('chat.overview.unread_messages'),
                    '/chat'
                  )
                }
              }
            }
          })
      }
    }
  }
}
</script>
