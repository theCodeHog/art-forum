<template>
  <div>
    <div id="user" class="shadow" @click="editUser">
      <font-awesome-icon :icon="['fas', 'user-secret']" />
      <span class="username">{{ user.name }}</span>
      <span class="userrole">{{ user.userRole }}</span>
      <span class="userdesc"> | {{ user.description }}</span>
      <span class="delete-user">
        <font-awesome-icon
          :icon="['fas', 'edit']"
          class="edit-user pointer"
          @click="editUser"
        />
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="pointer"
          @click="deleteThisUser(user.id)"
        />
      </span>
    </div>
    <div id="edit-user-block" v-if="isEditingUser">
      <div>
        <select v-model="newRole">
          <option v-for="(role, i) in roles" v-bind:value="role.value" :key="i">
            {{ role.text }}
          </option>
        </select>

        <span v-if="this.newRole === 'moderator'">
          <span v-for="(subforum, i) in subforums" :key="i" class="checkboxes">
            <input
              type="checkbox"
              v-model="subforum.checked"
              :true-value="subforum.text"
              :false-value="0"
            />
            {{ subforum.text }}
          </span>
        </span>

        <input
          type="submit"
          value="Save User Changes"
          @click="submit"
          class="submit-edited-user"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class UpdateUser extends Vue {
  @Prop() user;
  isEditingUser = false;
  roles = this.$store.state.roles;
  subforums = [
    { text: "Traditional Art", checked: "" },
    { text: "Digital Art", checked: "" },
    { text: "Photography", checked: "" },
  ];
  newRole = "";
  newDescription = "";

  editUser() {
    this.isEditingUser = !this.isEditingUser;
  }

  submit() {
    this.subforums.forEach((subforum) => {
      this.newDescription = this.newDescription + subforum.checked + " ";
    });
    let edits = {
      userRole: this.newRole,
      description: this.newDescription,
    };
    this.editUserInDb(edits);
    this.$router.push(`/`);
  }

  async editUserInDb(edits) {
    let res = await fetch(`/api/users/${this.$props.user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edits),
    });
    res = await res.json();
    if (!res) {
      console.log("Failed.");
    }
  }

  deleteThisUser(id) {
    this.deleteUser(id);
    this.$router.push(`/`);
  }

  async deleteUser(userId) {
    let res = await fetch(`/api/users/${userId}`, {
      method: "DELETE",
    });
    res = await res.json();
    if (!res) {
      console.log("Failed.");
    }
  }
}
</script>

<style scoped>
#user {
  padding: 0.8rem;
  margin-top: 0.5rem;
  background-color: #1f2e41;
  color: #e1e1e1;
}
#edit-user-block {
  display: block;
  background-color: #16202d;
  padding: 1.5rem;
  color: #e1e1e1;
}
.username,
.userrole {
  margin: 0 15px;
}
.username {
  font-size: 18px;
  font-weight: 500;
  color: #66c0f4;
}
.checkboxes {
  margin: 0 10px;
}
.edit-user {
  margin-right: 15px;
}
.delete-user {
  position: absolute;
  right: 50px;
  color: #31647f;
}
.submit-edited-user {
  position: absolute;
  right: 60px;
  color: #e1e1e1;
  font-weight: 500;
  padding: 5px 10px;
  background: rgb(119, 128, 136);
  background: linear-gradient(
    180deg,
    rgba(119, 128, 136, 1) 0%,
    rgba(65, 74, 82, 1) 100%
  );
  border: none;
}
</style>
