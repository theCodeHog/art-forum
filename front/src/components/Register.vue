<template>
  <div id="register">
    <form class="register-block" @submit.prevent="submit">
      <h3>Register</h3>
      <input
        type="text"
        id="name"
        name="name"
        class="register-box"
        placeholder="Enter First Name"
        v-model="name"
      />
      <input
        type="text"
        id="email"
        name="email"
        class="register-box"
        placeholder="Enter Email"
        v-model="email"
      />
      <input
        type="text"
        id="password"
        name="password"
        class="register-box"
        placeholder="Enter Password"
        v-model="password"
      />
      <button class="register-box" id="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class Register extends Vue {
  name = "";
  email = "";
  password = "";

  submit() {
    let newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      userRole: 'basicUser',
    };
    this.createNewUser(newUser);
    this.$router.push(`/`);
  }

  async createNewUser(newUser) {
    let res = await fetch(`/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    res = await res.json();
    console.log(res);
  }
}
</script>

<style scoped lang="scss">
#register {
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
.register-block {
  height: auto;
  padding: 5rem 0;
  text-align: center;
  margin: auto;
  color: #e1e1e1;
}
.register-box {
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
