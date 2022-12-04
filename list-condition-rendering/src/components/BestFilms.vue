<template>
  <div class="top-films">
    <h1 class="top-films__title">Top films</h1>
    <ul v-if="filmsCount" class="top-films__items">
      <li v-for="film in films" :key="film.id" class="top-films__item">
        {{ film.Title }}
      </li>
    </ul>
    <p v-else class="top-films__empty">Film list is empty</p>
  </div>
</template>

<script>
import films from "../data.js";

export default {
  name: "BestFilms",
  data: () => ({
    films,
  }),
  computed: {
    filmsCount() {
      return this.films.length;
    },
  },
};
</script>

<style scoped>
.top-films__title {
  font-size: 42px;
  font-weight: 700;
  color: #430e0e;
}

.top-films__item {
  font-size: 16px;
}
</style>
