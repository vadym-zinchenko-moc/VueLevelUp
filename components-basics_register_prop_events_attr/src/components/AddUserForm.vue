<template>
  <form @submit.prevent="getName">
    <input v-model="name" />
    <button type="submit">Add user</button>
  </form>
</template>

<script>
export default {
  name: "AddUserForm",
  data: () => ({
    name: ''
  }),
  methods: {
    getName() {
        this.$emit('addUser', this.name )
        this.name = ''
    }
  }
};

</script>

