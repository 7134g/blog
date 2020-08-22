<template>
  <div id="app">
    <NarBar></NarBar>
    <Home></Home>
<!--    <Login></Login>-->
  </div>
</template>

<script>
// import Login from './components/Login.vue';
import Home from "./components/Home";
import NarBar from './components/NarBar.vue';

export default {
  name: 'app',
  components: {
    // Login,
    NarBar,
    Home,
  },
};
</script>

<style>

</style>
