<template>
  <div>
    <h1 class="test">Test</h1>
    <h1 class="test-one">Test-one</h1>
    <h1 class="test-two">Test-two</h1>
    <h1 class="test-three">Test-three</h1>
    <h1 class="bind-style">Bind style</h1>
    <button @click="changeColor">Change bind color</button>
    <h1 :class="classes.yellow">Test module</h1>
    <h1 :class="$style.module">Module</h1>
    <TestComponent />
  </div>
</template>

<script>
import TestComponent from "./components/TestComponent";

export default {
  name: "App",
  components: { TestComponent },
  data: () => ({
    color: "blue",
  }),
  methods: {
    changeColor() {
      this.color = "pink";
    },
  },
};
</script>

<style scoped>
.test {
  color: rgb(230, 12, 12);
}

.bind-style {
  color: v-bind(color);
}

:global(.test-one) {
  color: #cecdcd;
}
</style>

<style module="classes">
.yellow {
  color: rgb(231, 231, 24);
}
</style>

<style>
.test-two {
  color: rgb(11, 118, 11);
}
</style>

<style module>
.module {
  color: rgb(127, 26, 222);
}
</style>
