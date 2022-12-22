<template>
  <div>
    <form class="user-add-form">
      <input class="user-add-form__input" v-model="newUser" />
      <button class="user-add-form__button" @click="addNewUser">Add new user</button>
    </form>
    <ul class="users">
      <li class="users__item" v-for="user of users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
    <div class="coordinates-window">
      <p class="coordinates-window__x">window coordinate X: {{ windowX }}</p>
      <p class="coordinates-window__y">window coordinate Y: {{ windowY }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data: () => ({
    users: [],
    newUser: "",
    windowX: "",
    windowY: "",
  }),
  methods: {
    addNewUser() {
      this.users.push({ name: this.newUser, id: this.users.length + 1 });
      this.newUser = "";
    },
    windowCoordinates() {
      this.windowX = window.event.clientX;
      this.windowY = window.event.clientY;
    },
  },
  beforeCreate() {
    console.log("beforeCreatedList");
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log('data :>> ', data);
        this.users = data});
  },
  beforeMount() {
    console.log("beforeMountList");
  },
  mounted() {
    window.addEventListener("mousemove", this.windowCoordinates);
  },
  beforeUpdate() {
    console.log("beforeUpdateList");
  },
  updated() {
    console.log("updatedList");
  },
  beforeUnmount() {
    console.log("beforeUnmountList");
  },
  unmounted() {
    window.removeEventListener("mousemove", this.windowCoordinates);
  },
};
</script>
