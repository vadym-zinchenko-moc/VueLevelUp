<template>
  <form @submit.prevent="addUser">
    <label>Name: </label>
    <input v-model="newUser.name" />
    <label>Email: </label>
    <input v-model="newUser.email" />
    <button :disabled="!valid">Add new user</button>
  </form>
</template>

<script>
import useForm from "@/composition/form";

export default {
  setup( _ , { emit }) {
    return { ...useForm(emit) };
  },
};
</script>
