<template>
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">{{$store.state.user.displayName}}</router-link> |
    <router-link to="/about">About</router-link>  | 
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'


export default {
  setup() {
    const store = useStore()
    console.log('newwww-->',store.state)

    onBeforeMount(() => {
      store.dispatch('fetchUser')
      
    })
    
  }
  
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 60px;
  height: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-top: 50%;
  font-size: 26px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
