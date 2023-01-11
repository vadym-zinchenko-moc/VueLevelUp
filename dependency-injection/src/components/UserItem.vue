<template>
  <div>
    <li v-for="user of usersList.value" :key="user.id" @click="getUserDetails(user.id)">
      {{ user.name }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  inject: ['usersList', 'getUserDetails'],
}
</script>

