<template>
  <div class="main-page">
    <div class="main-page__header">
      <slot name="header"></slot>
    </div>
    <div class="main-page__users">
      <ul v-if="users.length">
        <li v-for="user of users" :key="user.id">
          <slot name="users" v-bind="user"></slot>
        </li>
      </ul>
    </div>
    <div class="main-page__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data: () => ({
    users: [],
  }),
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => (this.users = data));
  },
};
</script>
