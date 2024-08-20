<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Navbar.vue';

export default {
  components: {
    Header
  }
};
</script>
