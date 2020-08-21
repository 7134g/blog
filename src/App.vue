<template>
  <div id="app">
    <home></home>
    <Login></Login>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Login,
    Home,
  },
};
</script>

<style>

</style>
