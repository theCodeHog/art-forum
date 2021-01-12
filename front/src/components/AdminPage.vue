<template>
  <div id="admin-page" v-if="this.$store.state.user.userRole === 'admin'">
    <h1 class="welcome-text">Admin Power Page</h1>
  </div>



  <div v-else class="welcome-text">NO ACCESS.</div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class AdminPage extends Vue {}
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
