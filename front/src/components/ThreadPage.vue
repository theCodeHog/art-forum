<template>
  <div id="thread-page">
    <p class="directory">
      <span class="pointer" @click="goToHome">All Discussions > </span>
      <span class="pointer" @click="goToCategory">
        {{ this.$route.path.substring(1).split("/")[0] }} >
      </span>
      <b>{{ this.currentThread.title }}</b>
    </p>
    <div class="current-thread shadow">
      <div class="comment-header">
        <font-awesome-icon :icon="['fas', 'user-secret']" />
        <span class="comment-user">{{ this.currentThread.name }}</span>
        <span class="comment-date"> {{ calculateTimePast }}</span>
      </div>
      <h2 class="thread-title">{{ currentThread.title }}</h2>
      <p class="thread-desc">{{ currentThread.content }}</p>
    </div>
    <div>
      <div class="comments-bar"><p>Comments</p></div>
      <Comment v-for="(comment, i) in comments" :key="i" :comment="comment" />
    </div>
    <h4
      class="pointer create-new-comment-button"
      @click="toggleCommentCreation"
      v-if="this.$store.state.user.userRole !== null"
    >
      Add a reply
    </h4>
    <div>
      <CreateNewComment v-if="isCreatingNewComment" />
    </div>
  </div>
</template>

<script>
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import Comment from "./Comment";
import CreateNewComment from "./CreateNewComment";

@Component({
  components: {
    Comment,
    CreateNewComment,
  },
})
export default class ThreadPage extends Vue {
  @Prop thread;
  isCreatingNewComment = false;
  currentThread = {};
  comments = null;

  @Watch("comments")
  onChange(newVal) {
    this.comments = newVal;
  }

  goToHome() {
    this.$router.push(`/`);
  }

  goToCategory() {
    this.$router.push(`/${this.$route.path.substring(1).split("/")[0]}`);
  }

  toggleCommentCreation() {
    this.isCreatingNewComment = !this.isCreatingNewComment;
  }

  get calculateTimePast() {
    console.log(this.$store.state.user.userRole);
    let timeNow = new Date();
    timeNow = timeNow.getTime();
    let timeCreated = this.currentThread.timeCreated;
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

  updateThread(res) {
    this.currentThread = res;
  }

  updateComments(res) {
    this.comments = res;
  }

  async fetchThread() {
    let res = await fetch(
      `/api/threads/${this.$route.path.substring(1).split("/")[1]}`
    );
    res = await res.json();
    this.updateThread(res);
  }

  async fetchComments() {
    let res = await fetch(
      `/api/comments/specific/${this.$route.path.substring(1).split("/")[1]}`
    );
    res = await res.json();
    console.log(res);
    this.updateComments(res);
  }

  created() {
    this.fetchThread();
    this.fetchComments();
  }
}
</script>

<style scoped>
.current-thread {
  color: #e1e1e1;
  padding: 1.5rem;
  margin-bottom: 15px;
  background: rgb(32, 99, 135);
  background: linear-gradient(180deg, #374e70 0%, #212f43 100%);
}
.thread-title,
.thread-desc {
  margin: 1rem 0 0 0.8rem;
}
.comments-bar {
  background-color: #172230;
  color: #31647f;
  padding: 8px;
  font-size: 14px;
}
.create-new-comment-button {
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
  color: #e1e1e1;
  background: rgb(32, 99, 135);
  background: linear-gradient(
    180deg,
    rgba(32, 99, 135, 1) 0%,
    rgba(23, 67, 92, 1) 100%
  );
}
.comment-user {
  color: white;
}
.comment-date {
  color: #8f98a0;
}
</style>
