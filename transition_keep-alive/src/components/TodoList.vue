<template>
  <div>
    <h1>Users list</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  name: "HomePage",
  setup() {
    let users = ref([]);

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => (users = data));
    });
    return { users };
  },
};
</script>
