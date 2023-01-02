<template>
  <div class="users">
    <h1 class="users__title">Users list</h1>
    <AddUserForm @addUser="addUser"/>
    <UsersList class="users__list" :users="users"  v-bind="$attrs" @getUserDetails="getUserDetails"/>
    <UserDetails v-if="userDetails" :userDetails="userDetails"/>
  </div>
</template>

<script>
import AddUserForm from "./components/AddUserForm";
import UserDetails from './components/UserDetails';
import UsersList from "./components/UsersList";

export default {
  name: "App",
  components: {
    UsersList,
    AddUserForm,
    UserDetails
},
  data: () => ({
    users: [],
    currentTab: true,
    userDetails: null
  }),
  methods: {
    addUser(name){
      this.users.push({name, id: this.users.length + 1})
    },
    getUserDetails(id) {
        this.userDetails = this.users.find((user) => user.id === id )
    }
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.users = users);
  },
};
</script>
<style scoped>
  .users__list{
    font-size: 22px;
  }
</style>

