<template>
    <div class="films">
        <form @submit.prevent="addFilm" class="add-film-form">
            <label>Name</label>
            <input v-model="filmName" class="add-film-form__input-name" />
            <label>Year</label>
            <input v-model="yearFilm" class="add-film-form__input-year" />
            <button type="submit">Add film</button>
        </form>
        <h1 class="films__title">Films list</h1>
        <ul class="films-list">
            <li class="films-list__item" v-for="film in sortFilms" :key="film.id">
                {{ film.Title }} {{ film.Year }}
            </li>
        </ul>
        <div class="films-count">Count films: {{ filmsCount }}</div>
    </div>
</template>

<script>
import films from "./data.js";

export default {
    name: "App",
    data: () => ({
        films,
        filmName: "",
        yearFilm: "",
    }),
    methods: {
        addFilm() {
            this.films.push({
                Title: this.filmName,
                Year: this.yearFilm,
                id: this.films.length + 1,
            });
            this.filmName = "";
            this.yearFilm = "";
        },
    },
    computed: {
        filmsCount() {
            return [...this.films].length;
        },
        sortFilms() {
            return [...this.films].sort((a, b) => {
                return Number(b.Year) - Number(a.Year);
            });
        },
    },
};
</script>

<style scoped>
.films {
  max-width: 400px;
  margin: 0 auto;
}

.add-film-form {
  display: flex;
  flex-direction: column;
}

.films__title {
  font-size: 42px;
  text-align: center;
  color: #c2c2c2;
}

.films-list {
  list-style-type: none;
  font-size: 22px;
}

.films__count {
  font-size: 14px;
  font-weight: bold;
}
</style>