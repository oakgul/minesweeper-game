<template>
  <div id="app">
    <Head />
    <hr>  
    <Minefield />
  </div>
</template>

<script>
import Head from './components/Head.vue';
import Minefield from './components/Minefield';

export default {
  name: 'App',
  components: {
    Head,
    Minefield,
  }
}
</script>
