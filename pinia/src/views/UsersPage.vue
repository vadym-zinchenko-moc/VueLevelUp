<template>
  <div>
    <AddUserForm />
    <UsersList />
    <UserDetails />
  </div>
</template>

<script>
import AddUserForm from "@/components/users/AddUserForm";
import UsersList from "@/components/users/UsersList";
import UserDetails from "@/components/users/UserDetails";

export default {
  name: 'UserPage',
  components: {
    AddUserForm,
    UsersList,
    UserDetails
  },
};
</script>

