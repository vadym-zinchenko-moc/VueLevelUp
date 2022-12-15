<template>
  <div class="lifecycle-hooks-example">
    <CounterComponent v-if="toggle"/>
    <UsersList v-else/>
    <button @click="toggleComponents">Toggle</button>
  </div>
</template>

<script>

import CounterComponent from './components/CounterComponent.vue';
import UsersList from './components/UsersList.vue';

export default {
  components: {
    UsersList,
    CounterComponent 
      },
  name: "App",
  data: () => ({
    toggle: true
  }),
  methods: {
    toggleComponents() {
      this.toggle = !this.toggle
    }
  }
};
</script>
