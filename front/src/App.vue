<template>
  <div id="app">
    <div id="home-screen">
      <MainHeader />
      <router-view id="router-block" />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import MainHeader from "./components/MainHeader";

@Component({
  components: {
    MainHeader
  },
})
export default class App extends Vue {

  get isUserLoggedIn() {
    if (this.$store.state.user.name !== null) {
      //this.$router.push(`/team/${this.$store.state.user.token}`);
      return true;
    }
    return false;
  }

  created() {}
}
</script>

<style>
#router-block {
  grid-area: router;
  margin: 2rem;
}
</style>
