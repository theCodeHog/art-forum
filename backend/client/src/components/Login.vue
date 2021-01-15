<template>
  <div id="login">
    <form class="login-block" @submit.prevent="login">
      <h3>Login</h3>
      <input
        type="text"
        id="email"
        name="email"
        class="input-box"
        placeholder="Enter Email"
        v-model="email"
      />
      <input
        type="text"
        id="password"
        name="password"
        class="input-box"
        placeholder="Enter Password"
        v-model="password"
      />
      <button class="input-box" id="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class Login extends Vue {
  email = "";
  password = "";

  async login() {
    if (this.token !== "") {
      let user = { email: this.email, password: this.password };
      this.$store.dispatch("login", user).then(this.redirect());
    }
  }
  redirect() {
    this.$router.push(`/`);
  }
}
</script>

<style scoped lang="scss">
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  border: none;
  display: flex;
  padding: 1rem;
  color: #ffffff;
  background-color: #5074a0 !important;
}
input:focus {
  padding-left: 1rem;
  border: none !important;
  outline: none !important;
  background-color: #5074a0 !important;
}
input::placeholder {
  font-style: italic;
  color: #ffffff;
}
.login-block {
  height: auto;
  padding: 5rem 0;
  text-align: center;
  margin: auto;
  color: #e1e1e1;
}
.input-box {
  width: 35vw;
  height: 50px;
  margin: 1em auto;
}
#username {
  margin: 0 auto 1rem;
}

#submit {
  margin: 2rem auto 0;
  padding: 6px;
  height: 3rem;
  text-align: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  border: none;
  color: #e1e1e1;
  background: rgb(32, 99, 135);
  background: linear-gradient(
    180deg,
    rgba(32, 99, 135, 1) 0%,
    rgba(23, 67, 92, 1) 100%
  );
}
</style>
