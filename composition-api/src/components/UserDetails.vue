<template>
  <div>
    <h2>User details</h2>
    <div v-if="userDetails">
      <button @click="toogleShow">{{ show ? "Hide email" : "Show email" }}</button>
      <p>{{ userDetails.name }}</p>
      <p v-if="show">{{ userDetails.email }}</p>
    </div>
    <div v-else>User Details empty</div>
  </div>
</template>

<script>
import useShow from "@/composition/toggleShow";
import { watch } from "vue";

export default {
  props: {
    userDetails: Object,
  },
  setup(props) {
    const { show, toogleShow } = useShow();

    watch(
      () => props.userDetails,
      () => (show.value = false)
    );

    return { show, toogleShow };
  },
};
</script>
