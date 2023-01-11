<template>
  <ul>
    <li v-for="user of users" :key="user.id" @click="$emit('getUserDetails', user.id)">
      <span>{{ user.name }}</span>
      <button @click="$emit('deleteUser', user.id)">Delete user</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    users: Array,
  },
};
</script>
