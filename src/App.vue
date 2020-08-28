<template>
  <div id="app">
    <NarBar></NarBar>
    <router-view></router-view>
<!--    <Login></Login>-->
  </div>
</template>

<script>
// import Login from './components/Login.vue';
import NarBar from './components/NarBar.vue';

export default {
  name: 'app',
  components: {
    // Login,
    NarBar,
  },
};
</script>

<style>

</style>
