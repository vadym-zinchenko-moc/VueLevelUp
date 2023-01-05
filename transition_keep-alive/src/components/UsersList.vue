<template>
  <div>
    <h1>Users list</h1>
    <form @submit.prevent="addNewUser">
      <input v-model="newUser" />
      <button>Add user</button>
    </form>
    <TransitionGroup name="list-complete" tag="ul">
      <li v-for="user of users" :key="user.id" class="list-complete-item">
        {{ user.name }}
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "UsersList",
  setup() {
    const users = ref([]);
    const newUser = ref("");

    const addNewUser = () => {
      const user = {
        name: newUser.value,
        id: users.value.length + 1,
      };

      users.value.push(user);
      newUser.value = "";
    };

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => (users.value = data));
    });

    return { users, newUser, addNewUser };
  },
};
</script>

<style>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
