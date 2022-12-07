<template>
  <div class="best-films-actors">
    <BestFilms v-if="films" ref="films" />
    <BestActor v-else-if="actor" ref="actor" />
    <p v-else>Empty state</p>
    <button @click="toggleShow('films')" class="toggle-button">Films</button>
    <button @click="toggleShow('actor')" class="toggle-button">Actor</button>
    <button @click="toggleShow('')" class="toggle-button">Empty state</button>
  </div>
</template>

<script>
import BestActor from "./components/BestActor";
import BestFilms from "./components/BestFilms";

export default {
  name: "App",
  components: { BestActor, BestFilms },
  data: () => ({
    data: "films",
  }),
  methods: {
    toggleShow(data) {
      this.data = data;
      console.log("ref films", this.$refs.films);
      console.log("ref actor", this.$refs.actor);
    },
  },
  computed: {
    films() {
      return this.data === 'films'
    },
    actor() {
      return this.data === 'actor'
    }
  }
};
</script>

<style scoped>
.best-films-actors {
  margin: 0 auto;
  max-width: 300px;
}
</style>
