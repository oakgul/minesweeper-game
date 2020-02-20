<template>
  <div class="container" id="app">
    <Head />
    <hr>  
    <Minefield />
    <Scoreboard />
  </div>
</template>

<script>
import Head from './components/Head.vue';
import Minefield from './components/Minefield';
import Scoreboard from './components/Scoreboard';

export default {
  name: 'App',
  components: {
    Head,
    Minefield,
    Scoreboard,
  }
}
</script>