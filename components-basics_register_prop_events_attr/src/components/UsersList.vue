<template>
  <ul class="users-list">
    <UserItem 
        v-for="user of users" 
        :user="user.name"
        :id="user.id"  
        :key="user.id" 
        @getUserDetails="$emit('getUserDetails', $event)"
    />
  </ul>
</template>

<script>
import UserItem from "./UserItem";

export default {
  components: { UserItem },
  name: "UsersList",
  created() {
    console.log(this.$attrs)
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>
