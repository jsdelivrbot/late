<template>
  <div class="course box">
    <template v-if="!editing">
      <details>
        <summary class="is-clearfix is-unselectable">{{ courseData.longname }}
          <span
            class="icon edit-course is-pulled-right"
            @click="editing = true"
          >
            <i class="fas fa-pencil-alt" />
          </span>
          <small class="has-text-grey">{{ courseData.periods.length }} periods</small>
          <span
            class="tag is-pulled-right"
            :style="{'background-color': courseData.color, 'color': 'white'}"
            :title="'You are in Section ' + courseData.section_id"
          >Section {{ courseData.section_id }}
          </span>
        </summary>

        <div class="periods">
          <table class="table is-full-width">
            <thead class="is-unselectable">
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Location</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="p in sortedPeriods"
                :key="p.day + p.start"
              >
                <td>{{ day(p.day) }}</td>
                <td>{{ time(p.start) }}<span class="has-text-grey-light">-</span>{{ time(p.end) }}</td>
                <td>{{ p.location }}</td>
                <td>{{ type(p.type) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </template>
    <template v-else>
      <form @submit.prevent="save">
        <input
          v-model.trim="courseData.longname"
          type="text"
          placeholder="Course Title"
          class="input course-longname-input"
          required
        >
        <input
          v-model.trim="courseData.section_id"
          type="text"
          placeholder="Section"
          class="input course-section-input"
          required
        >
        <input
          v-model="courseData.color"
          type="color"
          class="input course-color-input"
        >
        <button
          type="button"
          class="button is-warning"
          @click="cancel"
        >Cancel</button>
        <button
          :disabled="saved"
          class="button is-primary"
        >Save</button>
      </form>
    </template>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Course',
  props: {
    course: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      courseData: Object.assign({}, this.course),
      editing: false
    };
  },
  computed: {
    sortedPeriods () {
      return this.courseData.periods
        .concat()
        .sort((a, b) => parseInt(a.day) - parseInt(b.day));
    },
    saved () { return JSON.stringify(this.course) === JSON.stringify(this.courseData); }
  },
  methods: {
    day: num =>
      [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ][num],
    time: t => {
      const dt = moment(t, 'Hmm', true);
      if (dt.hours() === 12 && dt.minutes() === 0) {
        return 'noon';
      } else if (dt.minutes() === 0) {
        return dt.format('ha');
      }
      return dt.format('h:mma');
    },
    type (pType) {
      return this.$store.getters.periodType(pType);
    },
    cancel () {
      this.courseData = Object.assign({}, this.course);
      this.editing = false;
    },
    async save () {
      if (this.courseData.longname.length === 0 || this.courseData.section_id.length === 0) {
        return;
      }
      this.$emit('update-course', this.courseData);
      this.editing = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.periods {
  overflow: auto;
}

.course.box {
  .edit-course {
    display: none;
    cursor: pointer;
  }
  &:hover {
    .edit-course {
      display: inherit;
    }
  }
}
</style>
