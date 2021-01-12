<template>
  <div @click="goToThreadPage(thread.threadsId)">
    <div id="thread">
      <h4 class="thread-title">
        {{ thread.title }}
        <span class="last-updated"
          >{{ calculateTimePast }}
          <font-awesome-icon v-if="thread.isClosed" :icon="['fas', 'lock']"
        /></span>
      </h4>

      <h5 class="thread-username">{{ thread.name }}</h5>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class Thread extends Vue {
  @Prop() thread;

  goToThreadPage(threadsId) {
    this.$store.commit("setCurrentThread", this.$props.thread);
    this.$router.push(`${this.$router.currentRoute.path}/${threadsId}`);
  }

  get calculateTimePast() {
    let timeNow = new Date();
    timeNow = timeNow.getTime();
    let timeCreated = this.$props.thread.timeUpdated;
    let timePast = timeNow - timeCreated;
    timePast = timePast / 1000;
    var seconds = Math.floor(timePast % 60);
    timePast = timePast / 60;
    var minutes = Math.floor(timePast % 60);
    timePast = timePast / 60;
    var hours = Math.floor(timePast % 24);
    var days = Math.floor(timePast / 24);

    if (days >= 1) {
      return days + " days ago";
    }
    if (hours <= 23 && hours >= 1) {
      return hours + " hours ago";
    }
    if (minutes >= 1) {
      return minutes + " minutes ago";
    }
    return seconds + " seconds ago";
  }
}
</script>

<style scoped>
#thread {
  padding: 0.8rem;
  margin: 0.3rem;
  background-color: #324d6b;
  color: #e1e1e1;
}
#thread:hover {
  background-color: #577594;
}
.thread-title {
  margin-bottom: 10px;
}
.thread-username {
  color: #66c0f4;
}
.last-updated {
  position: absolute;
  right: 60px;
  font-size: 12px;
  text-decoration-thickness: 0;
  color: #66c0f4;
}
</style>
