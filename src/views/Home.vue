<template>
  <main class="home">
    <h1 class="style-heading">Welcome! {{$store.state.user.displayName}}</h1>
  </main>
</template>


<script>

// import { useStore } from 'vuex'

import { useAuthStore } from '../store/authStore.js';

export default {
  setup() {
    const store = useAuthStore()
    console.log('newwww-->',store.state)
  }
  
}
</script>

<style>
.style-heading {
  font-size: 36px; /* Adjust the font size as needed */
  color: black; /* Change the text color to your preference */
  text-align: center; /* Center-align the heading */
  /* Add more styles as desired */
}
</style>
