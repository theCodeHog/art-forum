<template>
  <div id="thread-page">
    <p class="directory">
      <span class="pointer" @click="goToHome">All Discussions > </span>
      <span class="pointer" @click="goToCategory">
        {{ currentCategory }} >
      </span>
      <b>{{ this.currentThread.title }}</b>
    </p>
    <div class="current-thread shadow">
      <div class="comment-header">
        <font-awesome-icon :icon="['fas', 'user-secret']" />
        <span class="comment-user">{{ this.currentThread.name }}</span>
        <span class="user-role"> ( {{ this.currentThread.userRole }} ) </span>
        <span class="comment-date"> {{ calculateTimePast }}</span>
        <span v-if="hasPermission">
          <font-awesome-icon
            v-if="!isThreadClosed"
            :icon="['fas', 'times']"
            class="close-thread pointer"
            @click="closeThread"
          />
        </span>
        <font-awesome-icon
          v-if="isThreadClosed"
          :icon="['fas', 'lock']"
          class="close-thread"
        />
      </div>
      <h2 class="thread-title">{{ currentThread.title }}</h2>
      <p class="thread-desc">{{ currentThread.content }}</p>
    </div>
    <div>
      <div class="comments-bar">
        <p>
          {{
            this.comments !== null && this.comments.length !== 0
              ? "Comments"
              : "Be the first to comment!"
          }}
        </p>
      </div>
      <Comment
        v-for="(comment, i) in comments"
        :key="i"
        :comment="comment"
        :isLocked="isThreadClosed"
      />
    </div>
    <div v-if="!isThreadClosed && userRole !== null">
      <h4
        class="pointer create-new-comment-button"
        @click="toggleCommentCreation"
      >
        Add a reply
      </h4>
    </div>
    <div>
      <CreateNewComment v-if="isCreatingNewComment" />
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
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
  comments = null;
  isThreadClosed = false;
  hasPermission = false;
  currentThread = {};
  userRole = this.$store.state.user.userRole;
  userDescription = this.$store.state.user.description;
  currentCategory = this.$route.path.substring(1).split("/")[1];
  currentThreadId = this.$route.path.substring(1).split("/")[2];
  isCreatingNewComment = false;

  /*   @Watch("comments")
  onChange(newVal) {
    this.comments = newVal;
  } */

  checkPermissions() {
    if (
      this.userRole === "moderator" &&
      this.userDescription.includes(this.currentCategory)
    ) {
      this.hasPermission = true;
    } else if (this.$store.state.user.userRole === "admin") {
      this.hasPermission = true;
    } else {
      this.hasPermission = false;
    }
  }

  goToHome() {
    this.$router.push(`/`);
  }

  goToCategory() {
    this.$router.push(`/forum/${this.currentCategory}`);
  }

  toggleCommentCreation() {
    this.isCreatingNewComment = !this.isCreatingNewComment;
  }

  closeThread() {
    let update = {
      isClosed: 1,
    };
    this.closeThreadOnDb(update);
    this.isCreatingNewComment = false;
    this.isThreadClosed = true;
  }

  async closeThreadOnDb(update) {
    let res = await fetch(`/api/threads/${this.currentThread.threadsId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    });
    res = await res.json();
    if (!res) {
      console.log("Failed.");
    }
  }

  //Work in progress - not important currently
  get calculateTimePast() {
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

  updateThread(res) {
    this.currentThread = res;
    this.isThreadClosed = this.currentThread.isClosed;
  }

  updateComments(res) {
    this.comments = res;
  }

  async fetchThread() {
    let res = await fetch(`/api/threads/${this.currentThreadId}`);
    res = await res.json();
    this.updateThread(res);
  }

  async fetchComments() {
    let res = await fetch(`/api/comments/specific/${this.currentThreadId}`);
    res = await res.json();
    this.updateComments(res);
  }

  created() {
    this.fetchThread();
    this.fetchComments();
    this.checkPermissions();
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
.user-role {
  color: #8f98a0;
  font-size: 12px;
  margin-left: 10px;
}
.close-thread {
  position: absolute;
  right: 60px;
  color: rgb(240, 81, 81);
}
</style>
