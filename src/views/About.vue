<template>
  <main class="about">
    <h1>HI! I am {{$store.state.user.displayName}}</h1>
  </main>
</template>


<script>

import { useStore } from 'vuex'


export default {
  setup() {
    const store = useStore()
    console.log('newwww-->',store.state)
  }
  
}
</script>