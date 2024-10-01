<template>
  <div>
   <button @click="store.login" v-if="!store.isAuth">Login</button>
   <div v-else>
    <button @click="store.logout">Logout</button>
    <div>{{ store.fullName }}</div>
   </div>
  </div>
</template>

<script>
import { useLoginStore } from "@/stores/login";

export default {
  name: "UserLogin",
  setup() {
    const store = useLoginStore()

   return {store}
  }
};
</script>
