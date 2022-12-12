<template>
  <section class="best-actor">
    <h1 class="best-actor__title">Best actor</h1>
    <button @click="toggleIsShowActor">Toggle show actor</button>
    <ul class="best-actor__items" v-show="isShowActor">
      <li v-for="(value, key) of actor" :key="key" class="best-actor__item">
        {{ key }} {{ value }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BestActor",
  data: () => ({
    actor: {
      name: "Arnold",
      surname: "Schwarzenegger",
      born: 1947,
      occupation: "Actor",
    },
    isShowActor: true,
  }),
  methods: {
    toggleIsShowActor() {
      this.isShowActor = !this.isShowActor;
    },
  },
};
</script>

<style scoped>
.best-actor__title {
  font-size: 32px;
  font-weight: 600;
  color: #f2a2a2;
}

.best-actor__item {
  font-size: 14px;
}
</style>
