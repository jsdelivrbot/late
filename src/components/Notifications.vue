<template>
  <div
    v-show="notifications.length > 0"
    class="notifications"
  >
    <div
      v-for="note in notifications"
      :key="note"
      :class="'is-' + note.type"
      class="notification"
    ><button
      class="delete"
      @click="remove(note)"
    />{{ n.description }}</div>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  data() {
    return {};
  },
  computed: {
    notifications() {
      return this.$store.state.notifications.list;
    }
  },
  methods: {
    remove(notification) {
      this.$store.commit('REMOVE_NOTIFICATION', notification);
    }
  }
};
</script>

<style lang="scss" scoped>
.notifications {
  padding: 30px 20px 0px 20px;
}
</style>
