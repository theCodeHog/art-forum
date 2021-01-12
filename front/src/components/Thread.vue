<template>
  <div @click="goToThreadPage(thread.threadsId)">
    <div id="thread">
      <h4>{{ thread.title }}</h4>
      <h6>{{ thread.userId }}</h6>
    </div>
    <CreateNewComment v-if="isCreatingNewComment" class="create-new-comment" />
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import CreateNewComment from "./CreateNewComment";

@Component({
  components: {
    CreateNewComment,
  },
})
export default class Thread extends Vue {
  @Prop() thread;
  isCreatingNewComment = this.$store.state.isCreatingNewComment;

  goToThreadPage(threadsId) {
    this.$store.commit("setCurrentThread", this.$props.thread);
    this.$router.push(`${this.$router.currentRoute.path}/${threadsId}`);
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
</style>
