<template>
  <div>
    <div id="main-header">
      <h1 @click="goToHome()" class="pointer logo">ART FORUM</h1>
      <div v-if="this.$store.state.user.email !== null">
        <span id="logout-button"
          ><span @click="logout">Logout {{ this.$store.state.user.name }} </span
          ><span
            v-if="this.$store.state.user.userRole === 'admin'"
            @click="goToAdmin()"
          >
            | Admin Powers</span
          ></span
        >
      </div>
      <div v-else>
        <span id="login-button" @click="login">Login |</span>
        <span id="register-button" @click="register">Register</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class MainHeader extends Vue {
  goToHome() {
    if (this.$route.path !== `/`) {
      this.$router.push(`/`);
    }
  }

  goToAdmin() {
    if (this.$route.path !== `/admin`) {
      this.$router.push(`/admin`);
    }
  }

  login() {
    this.$router.push("/login");
  }

  register() {
    this.$router.push("/register");
  }

  logout() {
    this.$store.dispatch("logout");
    if (this.$route.path !== `/`) {
      this.$router.push("/");
    }
  }

  /*   get username() {
    if (this.$store.state.user.name !== null) {
      return this.$store.state.user.name;
    } else {
      return "";
    }
  } */
}
</script>

<style scoped>
#main-header {
  display: block;
  padding: 1rem 2rem;
  grid-template-columns: 40% 1fr 5%;
  align-items: center;
  background-color: #171a21;
  color: #c5c3c0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
}
#main-header-items > * {
  display: inline-block;
}
.logo {
  align-items: left;
  margin-left: 25px;
}
#login-button {
  position: absolute;
  top: 25px;
  right: 120px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  color: #c5c3c0;
}
#logout-button {
  position: absolute;
  top: 25px;
  right: 60px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  color: #c5c3c0;
}
#register-button {
  position: absolute;
  top: 25px;
  right: 58px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  color: #c5c3c0;
}
</style>
