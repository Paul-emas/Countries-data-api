<template>
  <div>
    <div class="container-fluid">
      <app-form></app-form>
      <app-card></app-card>
    </div>
  </div>
</template>

<script>
  import Form from './components/shared/Form';
  import Card from './components/shared/Card';

  export default {
    components: {
      "app-form": Form,
      "app-card": Card
    }
  }
</script>

<style lang="scss">
  // MIXINS



  // VARIABLES

  // Primary Root light Color
  :root {
    --primary-color-light: #fafafa;
    --primary-color: #fffff !important;
    --text-color: #111517;
    --form-input: #c9c9c9;
    --glass: #dddbdb;
  }

  [data-theme="dark"] {
    --primary-color: hsl(207, 26%, 17%);
    --white: hsl(207, 26%, 17%);
    --primary-color-light: #2b3945;
    --form-input: #1e2730;
    --text-color: #ffffff;
    --glass: #111517;
  }


  // BASE

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
  }

  @import url('https://fonts.google.com/specimen/Nunito+Sans');


  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito Sans', sans-serif !important;
    background-color: var(--primary-color-light);
    transition: all .4s;
    overflow-x: hidden;
  }

  .container-fluid {
    padding: 0 5rem;
  }

  @media screen and (max-width: 900px) {
    .container-fluid {
      padding: 0 1.5rem !important;
    }
  }
</style>