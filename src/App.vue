<template>
  <div id="app" class="main">,
    <div class="container" >
    <Head class="mt-2" />
    <hr>  
    <Minefield />
    <Scoreboard />
  </div>
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

<style scoped>
  .container {
    width: 900px;
  }

</style>