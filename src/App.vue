<template>
  <div id="app" class="bg-black overflow-x-hidden">
    <AppApplication></AppApplication>
  </div>
</template>

<script>
import AppApplication from "@/views/Application";
export default {
  name: "App",

  components: {
    AppApplication,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
