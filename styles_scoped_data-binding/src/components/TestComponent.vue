<template>
  <div>
    <h1 class="test">Test-child</h1>
    <h1 class="test-one">Test-child-one</h1>
    <h1 class="test-two">Test-child-two</h1>
    <h1 class="test-three">Test-child-three</h1>
    <h1 class="setup-script">Setup</h1>
  </div>
</template>

<script setup>
const theme = {
  color: "brown",
};
</script>

<script>
export default {
  name: "TestComponent",
};
</script>

<style>
.test-three {
  color: rgb(0, 255, 255);
}

.setup-script {
  color: v-bind("theme.color");
}
</style>
