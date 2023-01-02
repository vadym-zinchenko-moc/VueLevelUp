<template>
  <div>
    <h1>Users list</h1>
    <AddUserForm @addNewUser="addNewUser" />
    <UsersList :users="users" @getUserDetails="getUserDetails" @deleteUser="deleteUser"/>
    <UserDetails :userDetails="userDetails" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import AddUserForm from "./components/AddUserForm";
import useUsers from "@/composition/users";

export default {
  components: { UsersList, UserDetails, AddUserForm },
  setup() {
    const { users, userDetails, addNewUser, getUserDetails, deleteUser } = useUsers();

    onMounted(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => (users.value = data));
    });

    return { users, userDetails, addNewUser, getUserDetails, deleteUser };
  },
};
</script>
