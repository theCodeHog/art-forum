<template>
  <div id="admin-page" v-if="this.$store.state.user.userRole === 'admin'">
    <h1 class="welcome-text">Admin Power Page</h1>
    <div id="">
      <UpdateUser
        v-for="(user, i) in users"
        class="pointer"
        :key="i"
        :user="user"
      />
    </div>
  </div>

  <div v-else class="welcome-text">NO ACCESS.</div>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import UpdateUser from "./UpdateUser";

@Component({
  components: {
    UpdateUser,
  },
})
export default class AdminPage extends Vue {
  isEditingUser = false;
  users = null;

  @Watch("users")
  onChange(newVal) {
    this.users = newVal;
  }

  toggleUserEditingField() {
    this.isEditingUser = !this.isEditingUser;
  }

  updateUsers(res) {
    this.users = res;
  }

  async fetchUsers() {
    let res = await fetch(`/api/users`);
    res = await res.json();
    this.updateUsers(res);
  }

  created() {
    this.fetchUsers();
  }
}
</script>

<style scoped lang="scss">
#admin-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.welcome-text {
  margin: 2rem;
  text-align: center;
  color: white !important;
  font-size: 1.5rem;
}
</style>
