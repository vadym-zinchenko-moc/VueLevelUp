<template>
  <div>
    <div v-if="userDetails">
      {{ userDetails.name }}
      {{ userDetails.email }}
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useUsersStore } from "@/stores/users";

export default {
  name: "UserDetails",
  computed: {
    ...mapState(useUsersStore, ["userDetails"]),
  },
};
</script>
