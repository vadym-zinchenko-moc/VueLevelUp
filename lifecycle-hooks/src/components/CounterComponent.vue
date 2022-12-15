<template>
  <div class="counter" :class="{ 'counter--green': greenColor }">Test {{ counter }}</div>
</template>

<script>
export default {
  name: "CounterComponent",
  data: () => ({
    counter: 0,
    greenColor: false,
  }),
  methods: {
    timer() {
      setInterval(() => {
        this.counter++;
      }, 1000);
    },
  },
  beforeCreate() {
    console.log("beforeCreateCounter");
  },
  created() {
    console.log("createdCounter");
  },
  beforeMount() {
    console.log("beforeMountCounter");
  },
  mounted() {
    console.log("mountedCounter");
    this.timer();
  },
  beforeUpdate() {
    console.log("beforeUpdateCounter");
  },
  updated() {
    this.greenColor = !this.greenColor;
  },
  beforeUnmount() {
    console.log("beforeUnmountCounter");
  },
  unmounted() {
    console.log("unmountCounter");
    clearTimeout(this.timer);
  },
};
</script>

<style scoped>
.counter {
  color: #008a53;
}

.counter--green {
  color: #860a0a;
}
</style>
