<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/shared/Header';

  export default {
    components: {
      "app-header": Header
    }
  }
</script>