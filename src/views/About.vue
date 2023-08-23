<template>
  <main class="about">
    <h1>HI! I am {{store.user.displayName}}</h1>
  </main>
</template>


<script>

// import { useStore } from 'vuex'
import { useAuthStore } from '../store/authStore.js';


export default {
  setup() {
    const store = useAuthStore()
    console.log('newwww-->',store.state)
    const user = store.user;

    return{
      store,
      user
    }
  }
  
}
</script>