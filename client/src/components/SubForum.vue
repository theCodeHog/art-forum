<template>
  <div>
    <p class="directory"><span class="pointer" @click="goToHome">All Discussions > </span>
       {{ this.$route.path.substring(1).split("/")[1].replace("%20", " ") }}
    </p>
    <div id="">
      <Thread
        v-for="(thread, i) in threads"
        class="pointer"
        :key="i"
        :thread="thread"
      />
    </div>
    <h4
      class="pointer create-new-thread-button"
      @click="toggleThreadCreation"
      v-if="this.$store.state.user.userRole !== null"
    >
      Create New Discussion
    </h4>
    <div>
      <CreateNewThread v-if="isCreatingNewThread" class="start-new-thread" />
    </div>
  </div>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import Thread from "./Thread";
import CreateNewThread from "./CreateNewThread";

@Component({
  components: {
    Thread,
    CreateNewThread,
  },
})
export default class SubForum extends Vue {
  isCreatingNewThread = this.$store.state.isCreatingNewThread;
  threads = null;

  @Watch("threads")
  onChange(newVal) {
    this.threads = newVal;
  }

  goToHome() {
    this.$router.push(`/`);
  }

  toggleThreadCreation() {
    this.isCreatingNewThread = !this.isCreatingNewThread;
  }

  updateThreads(res) {
    this.threads = res;
  }

  async fetchThreads() {
    let res = await fetch(
      `/api/threads/specific/${this.$route.path.substring(1).split("/")[1]}`
    );
    res = await res.json();
    this.updateThreads(res);
  }

  created() {
    this.fetchThreads();
  }
}
</script>

<style scoped>
.create-new-thread-button {
  padding: 1rem;
  margin: 0 0.3rem;
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
</style>
