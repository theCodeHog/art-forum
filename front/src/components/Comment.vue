<template>
  <div
    id="comment"
    :class="{ 'shadow warning': comment.isWarning, shadow: !comment.isWarning }"
  >
    <div class="comment-header">
      <font-awesome-icon :icon="['fas', 'user-secret']" />
      <span class="comment-user">{{ this.$props.comment.name }}</span>
      <span class="comment-date">{{ calculateTimePast }}</span>
      <p class="comment-content">{{ comment.content }}</p>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class Thread extends Vue {
  @Prop() comment;

  get calculateTimePast() {
    let timeNow = new Date();
    timeNow = timeNow.getTime();
    let timeCreated = this.$props.comment.date;
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
#comment {
  padding: 0.8rem;
  margin-bottom: 0.3rem;
  background-color: #1f2e41;
  color: #e1e1e1;
}
.warning {
  border: solid 5px rgb(196, 42, 42) !important;
  color: rgb(245, 79, 79) !important;
}
</style>
