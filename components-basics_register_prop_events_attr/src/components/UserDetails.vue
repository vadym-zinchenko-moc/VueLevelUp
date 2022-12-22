<template>
    <div>
        <h1>User details</h1>
        <p>Name: {{ userDetails.name }}</p>
        <p>Street: {{ userDetails.address.street }}</p>
        <p>Email: {{ userDetails.email }}</p>
    </div>
</template>

<script>
export default {
  name: "UserDetails",
  props: {
    userDetails: {
      type: Object,
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
