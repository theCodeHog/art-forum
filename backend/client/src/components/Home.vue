<template>
  <div class="home">
    <p class="directory">All Discussions</p>
    <div
      v-for="(forumTopic, i) in forumTopics"
      :key="i"
      id="forum-topic"
      class="pointer"
      @click="goToSubForum(forumTopic)"
    >
      <h3>{{ forumTopic }}</h3>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class Home extends Vue {
  get forumTopics() {
    return this.$store.state.forumTopics;
  }

  goToSubForum(subForum) {
    this.$router.push(`/${subForum}`);
  }
}
</script>

<style scoped>
.home {
  color: #e1e1e1;
  padding-top: 15px 0;
  margin: 1rem;
}
#forum-topic {
  background-color: #273b52;
  padding: 1.5rem;
  margin-bottom: 0.3rem;
}

#forum-topic:hover {
  background-color: #40566e;
}
</style>
