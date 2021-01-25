<template>
  <div id="create-new-thread">
    <form @submit.prevent="submit">
      <input
        type="text"
        v-model="title"
        class="title-input"
        required
        placeholder="Enter a title"
      />
      <textarea
        v-model="content"
        class="content-input"
        required
        placeholder="Say something"
      />
      <input
        type="submit"
        value="Post New Discussion"
        class="submit-new-thread"
      />
    </form>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class CreateNewThread extends Vue {
  title = "";
  content = "";

  submit() {
    var current = new Date();
    var currentSubForum = this.$route.path.substring(1).split("/")[1];
    let newThread = {
      title: this.title,
      content: this.content,
      timeCreated: current.getTime(),
      timeUpdated: current.getTime(),
      subforum: currentSubForum,
      userId: this.$store.state.user.id,
    };
    this.createNewThread(newThread);
    this.$router.push(`/`);
  }

  async createNewThread(newThread) {
    let res = await fetch(`/api/threads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newThread),
    });
    res = await res.json();
    if (!res){
      console.log('Failed.');
    }
  }
}
</script>

<style scoped lang="scss">
#create-new-thread {
  display: block;
  background-color: #16202d;
  padding: 1.5rem;
  margin: 0 5px;
}

.title-input {
  color: #b6b6b6;
  padding: 10px;
  margin: 0 0 10px 0;
  width: 100%;
  background-color: #121a24;
  border: 1px solid #000000;
}
.content-input {
  color: #b6b6b6;
  padding: 10px;
  margin: 0 0 10px 0;
  min-width: 100%;
  max-width: 100%;
  background-color: #121a24;
  border: 1px solid #000000;
}
.submit-new-thread {
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
.title-input:focus,
.content-input:focus {
  outline: none !important;
  border: 1px solid rgb(94, 94, 94) !important;
}
</style>
