<template>
  <div id="comment" class="shadow">
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

    return (
      days +
      " days, " +
      hours +
      " hours, " +
      minutes +
      " minutes, and " +
      seconds +
      " seconds"
    );
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
</style>
