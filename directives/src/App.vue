<template>
 <div id="app">
  <h1>Styles directive</h1>
  <p v-font-style.small>Small</p>
  <p v-font-style.small.red>Small red</p>
  <p v-font-style.small.green>Small green</p>
  <p v-font-style.large>Large</p>
  <p v-font-style.large.red>Large red</p>
  <p v-font-style.large.green>Large green</p>
  <p v-font-style.extraLarge>Extra large</p>
  <p v-font-style.extraLarge.red>Extra large red</p>
  <p v-font-style.extraLarge.green>Extra large green</p>
  <input v-model="text" v-validator="text"/>
 </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    text: ''
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
