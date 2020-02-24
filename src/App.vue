<template>
  <div class="container" id="app">
    <Head class="mt-2" />
    <hr>  
    <Minefield />
    <Scoreboard />
    <!-- <Deneme /> -->
  </div>
</template>

<script>
import Head from './components/Head.vue';
import Minefield from './components/Minefield';
import Scoreboard from './components/Scoreboard';
// import Deneme from './components/Deneme';

export default {
  name: 'App',
  components: {
    Head,
    Minefield,
    Scoreboard,
    // Deneme,
  }
}
</script>

<style scoped>
  .container {
    width: 900px;
    /* background-color: red; */
  }
</style>