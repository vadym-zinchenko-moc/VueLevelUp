<template>
  <div>
    <nav class="nav-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/todo">Todo list</router-link>
    </nav>
    <section class="body">
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </Transition>
      </router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
};
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
.nav-menu {
  display: flex;
  justify-content: space-around;
  max-width: 200px;
  margin: 0 auto;
}
.body {
  max-width: 600px;
  margin: 0 auto;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
