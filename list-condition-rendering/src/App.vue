<template>
  <div class="best-films-actors">
    <BestFilms v-if="isShow" />
    <BestActor v-else />
    <button @click="toggleShow" class="toggle-button">Toggle show</button>
  </div>
</template>

<script>
import BestActor from "./components/BestActor";
import BestFilms from "./components/BestFilms";

export default {
  name: "App",
  components: { BestActor, BestFilms },
  data: () => ({
    isShow: true,
  }),
  methods:{ 
    toggleShow() {
      this.isShow = !this.isShow
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
