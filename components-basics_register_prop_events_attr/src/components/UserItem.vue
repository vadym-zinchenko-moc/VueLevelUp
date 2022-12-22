<template>
  <li
    class="user"
    :class="{ 'user--green-text': greenColorText }"
    @click="$emit('getUserDetails', id)"
  >
    {{ user }}
  </li>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
    },
  },
  computed: {
    greenColorText() {
      return this.user.length > 15;
    },
  },
};
</script>

<style scoped>
.user {
  color: red;
}

.user--green-text {
  color: green;
}
</style>
