<template>
  <div>
    <UserList/>
    <div v-if="userDetails">
        <h2>{{ userDetails.name }}</h2>
        <p>{{ userDetails.email }}</p>
    </div>
</div>
</template>

<script>
import UserList from './components/UserList.vue'
import { computed } from 'vue'

export default {
  name: 'App',
  components: {
    UserList
  },
  data: () => ({
    users: [],
    userDetails: null
  }),
  provide() {
    return {
      usersList: computed(() => this.users),
      getUserDetails: this.getUserDetails
    }
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.users = users);
  },
  methods: {
    getUserDetails (id) {
        this.users.find((user) =>  {
          if(user.id === id) {
            this.userDetails = user
          }
        })
    }
  }
}
</script>


