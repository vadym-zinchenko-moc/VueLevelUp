<template>
  <div>
    <h1>Users</h1>
    <ul v-if="users.length">
      <li v-for="user of users" :key="user.id" @click="getUserDetails(user.id)">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUsersStore } from "@/stores/users";

export default {
  name: "UsersList",
  computed: {
    ...mapState(useUsersStore, ["users"]),
  },
  methods: {
    ...mapActions(useUsersStore, ["getUsers", "getUserDetails"]),
  },
  created() {
    this.getUsers()
  }
};
</script>
