<template>
  <div class="assignment-overview">
    <section
      v-if="!assignment"
      class="section"
    >
      <h1 class="title">Assignment Not Found</h1>
      <router-link
        to="/assignments"
        tag="button"
        class="button is-primary"
      >Assignment List</router-link>
    </section>
    <section
      v-else
      class="section"
    >
      <h2 class="subtitle">{{ course.longname }}</h2>
      <h1 class="title">{{ assignment.title }}</h1>
      <div class="content">
        <blockquote>
          <p>{{ assignment.description }}</p>
        </blockquote>
      </div>
      <hr>
      <button
        class="button is-danger"
        @click="remove"
      >Remove</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AssignmentOverview',
  data () {
    return {};
  },
  computed: {
    assignment () {
      return this.$store.getters.getAssignmentById(
        this.$route.params.assignmentID
      );
    },
    course () {
      return this.$store.getters.getCourseFromCRN(this.assignment.courseCRN);
    }
  },
  methods: {
    remove () {
      if (
        !confirm(
          `Are you sure you want to remove assignment ${this.assignment.title}?`
        )
      ) { return; }
      this.$store.dispatch('REMOVE_ASSIGNMENT', this.assignment._id);
      this.$store.commit('ADD_NOTIFICATION', {
        type: 'success',
        description: 'Successfully removed assignment.'
      });
      this.$router.push('/assignments');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>