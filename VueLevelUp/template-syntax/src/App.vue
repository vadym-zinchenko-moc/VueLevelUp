<template>
    <div class="films">
        <table class="films-table">
            <caption class="table__title">
                Film list
            </caption>
            <thead class="table-header">
                <tr class="table-header__items">
                    <th class="header__item">Name</th>
                    <th class="header__item">№</th>
                    <th class="header__item">Year</th>
                    <th class="header__item">Country</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr v-for="(film, i) in films" :key="i" ref="table-body__items">
                    <td class="body__item">{{ i + 1 }})</td>
                    <td class="body__item">{{ film.Title }}</td>
                    <td :class="['body__item', { 'old-film': film.Year < 2000 }]">{{ film.Year }}</td>
                    <td :class="['body__item', { 'canada-film': film.Country === 'Canada'}]">{{ film.Country }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import films from "./data.js";

export default {
    name: "App",
    data: () => ({
        films: films,
    }),
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

.films {
    display: flex;
    justify-content: center;
}

.films-table {
    width: 100%;
    margin: 20px;
}

.table__title {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
}

.table-header__items, .table-body__items {
    border: 1px solid gray;
}

.header__item {
    color: gray;
    font-size: 22px;
    border: 1px solid gray;
    padding: 5px 10px;
}

.body__item {
    font-size: 22px;
    border: 1px solid gray;
    padding: 5px 10px;
}

.old-film {
    color: #FF0000;
}

.canada-film {
    background-color: blanchedalmond;
}
</style>
