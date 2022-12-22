<template>
  <MainPage>
    <template #header> Header </template>
    <template #users="{ name, email }">
      <div class="user">
        <h1 class="user__name">{{ name }}</h1>
        <p class="user__email">{{ email }}</p>
      </div>
    </template>
    <template #footer> Footer </template>
  </MainPage>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>
