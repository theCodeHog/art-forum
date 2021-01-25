<template>
  <div id="login">
    <form class="login-block" @submit.prevent="login">
      <h3 class="login-h3">Login</h3>
      <p v-if="errors.length">
          <ul>
            <p class="red" v-for="(error, i) in errors" :key="i">{{ error + " " }}</p>
          </ul>
      </p>
      <input
        type="email"
        id="email"
        name="email"
        class="input-box"
        placeholder="Enter Email"
        v-model="email"
      />
      <input
        type="password"
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
  email = null;
  password = null;
  errors = [];

    checkForm() {
    this.errors = [];

    if (this.email === null) {
      this.errors.push("Email required.");
    } else if (!this.validEmail(this.email)) {
      this.errors.push("Valid email required.");
    }

    if (this.password === null) {
      this.errors.push("Password required.");
    }

    if (!this.errors.length) {
      return true;
    }
  }

  validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  async login() {
    let value = this.checkForm();
    if (value){
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
.login-h3{
  margin-bottom: 1em;
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
