<template>
  <div id="nav" v-if="$store.state.user" class="flex-container">
   <div class="router-links">
      <router-link to="/">{{$store.state.user.displayName}}</router-link>|
      <router-link to="/about">About</router-link>
    </div> 
    <button class ="logout_btn" @click="$store.dispatch('logout')">Logout</button>
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

.router-links {
  display: flex;
  align-items: center;
}

#nav {
  padding: 60px;
  height: 40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
  font-size: 26px;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logout_btn{
  background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
  margin-right: 10px;
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center; 
}
</style>
