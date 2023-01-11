<template>
  <form @submit.prevent="addNewUser">
    <label>Name:</label>
    <input v-model="name" />
    <label>Email:</label>
    <input v-model="email" />
    <button :disabled="!validator">Add user</button>
  </form>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "@/stores/users";

export default {
  name: "AddUserForm",
  data: () => ({
    name: "",
    email: "",
  }),
  computed: {
    ...mapState(useUsersStore, ["getLengsUsers"]),
    validator() {
      return this.name.trim().length && this.email.trim().length;
    },
  },
  methods: {
    ...mapActions(useUsersStore, ["addUser"]),
    addNewUser() {
      const newUser = {
        name: this.name,
        email: this.email,
        id: this.getLengsUsers + 1,
      };

      this.addUser(newUser);

      this.name = "";
      this.email = "";
    },
  },
};
</script>
