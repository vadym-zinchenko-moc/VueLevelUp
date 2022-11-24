<template>
    <div class="films-table--container">
        <table class="films-table">
            <caption class="table-title">
                Film list
            </caption>
            <thead class="table-header">
                <tr class="table-header__items">
                    <th class="item">№</th>
                    <th class="item">Name</th>
                    <th class="item">Year</th>
                    <th class="item">Country</th>
                </tr>
            </thead>
            <tbody class="table-body__items">
                <tr v-for="(film, i) in films" :key="i" ref="items">
                    <td class="item">{{ i + 1 }})</td>
                    <td class="item">{{ film.Title }}</td>
                    <td :class="['item', { oldFilm: film.Year < 2000 }]">{{ film.Year }}</td>
                    <td :class="['item', {canadaFilm: film.Country === 'Canada'}]">{{ film.Country }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import films from "./data.js";

export default {
    name: "App",
    data() {
        return {
            films: films,
        };
    },
    mounted() {
        console.log(this.$refs.items[0])
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.films-table--container {
    display: flex;
    justify-content: center;
}

.films-table {
    width: 100%;
    margin: 20px;
}

.table-title {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
}

.table-header__items {
    border: 1px solid gray;
}

.table-header__items .item {
    color: gray;
    font-size: 22px;
    border: 1px solid gray;
    padding: 5px 10px;
}

.table-body__items {
    border: 1px solid gray;
}

.table-body__items .item {
    font-size: 22px;
    border: 1px solid gray;
    padding: 5px 10px;
}

.oldFilm {
    color: red;
}

.canadaFilm {
    background-color: blanchedalmond;
}
</style>
