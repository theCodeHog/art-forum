<template>
  <div id="create-new-comment">
    <div>
      <textarea
        v-model="content"
        class="content-input"
        required
        placeholder="Say something"
      />
      <input
        type="submit"
        value="Post Comment"
        @click="submit"
        class="submit-new-comment"
      />
      <input
        v-if="hasPermission"
        type="submit"
        value="Post as a Warning"
        @click="submitWarning"
        class="submit-new-warning"
      />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class CreateNewComment extends Vue {
  content = "";
  userRole = this.$store.state.user.userRole;
  userDescription = this.$store.state.user.description;
  currentCategory = this.$route.path.substring(1).split("/")[0];
  hasPermission = false;

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

  submit() {
    var current = new Date();
    var currentThread = this.$route.path.substring(1).split("/")[1];
    let newComment = {
      content: this.content,
      date: current.getTime(),
      threadId: currentThread,
      userId: this.$store.state.user.id,
      isWarning: 0,
    };
    this.createNewComment(newComment);
    this.updateThread(currentThread, newComment.date);
    this.$router.push(`/${this.currentCategory}`);
  }

  //had to separate this instead of using the regular submit() function due to rendering issue
  submitWarning() {
    var current = new Date();
    var currentThread = this.$route.path.substring(1).split("/")[1];
    let newComment = {
      content: this.content,
      date: current.getTime(),
      threadId: currentThread,
      userId: this.$store.state.user.id,
    };
    this.createNewComment(newComment);
    this.updateThread(currentThread, newComment.date);
    this.$router.push(`/${this.currentCategory}`);
  }

  async createNewComment(newComment) {
    let res = await fetch(`/api/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });
    res = await res.json();
    console.log(res);
  }

  async updateThread(threadId, timeUpdated) {
    let update = {
      timeUpdated: timeUpdated,
    };
    let res = await fetch(`/api/threads/${threadId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    });
    res = await res.json();
    console.log(res);
  }

  created() {
    this.checkPermissions();
  }
}
</script>

<style scoped lang="scss">
#create-new-comment {
  display: block;
  background-color: #16202d;
  padding: 1.5rem;
  margin: 0 5px;
}
.content-input {
  color: #e1e1e1;
  padding: 10px;
  margin: 0 0 10px 0;
  min-width: 100%;
  max-width: 100%;
  background-color: #121a24;
  border: 1px solid #000000;
}
.submit-new-comment {
  color: #e1e1e1;
  font-weight: 500;
  padding: 10px;
  margin: 0 0 0 5px;
  background: rgb(119, 128, 136);
  background: linear-gradient(
    180deg,
    rgba(119, 128, 136, 1) 0%,
    rgba(65, 74, 82, 1) 100%
  );
  border: none;
}
.submit-new-warning {
  color: #e1e1e1;
  font-weight: 500;
  padding: 10px;
  margin: 0 0 0 5px;
  background: rgb(133, 61, 61);
  background: linear-gradient(
    180deg,
    rgb(168, 58, 58) 0%,
    rgb(116, 29, 29) 100%
  );
  border: none;
}
.content-input:focus {
  outline: none !important;
  border: 1px solid rgb(94, 94, 94) !important;
}
</style>
