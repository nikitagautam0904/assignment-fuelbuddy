<template>
  <main class="login">
    <section class="forms">
      <form class="login" @submit.prevent="login">
        <h2 class="text-2xl uppercase mb-8">Login</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="login_form.email"
          class="w-full max-w-md mb-6 p-2 border-b-2 border-gray-500 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
          class="w-full max-w-md mb-6 p-2 border-b-2 border-gray-500 outline-none"
        />
        <input
          type="submit"
          value="Login"
          class="bg-red-500 text-white font-semibold py-3 px-6 rounded cursor-pointer text-uppercase"
        />
        <p class="text-gray-600 mt-4">
          If you don't have an account then
          <router-link to="/register" class="text-red-500">Sign up!</router-link>
        </p>
      </form>
    </section>
  </main>
</template>




<script>
import { ref } from 'vue'
// import { useStore } from 'vuex'
import { useAuthStore } from '../store/authStore.js';

export default {
	
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useAuthStore();

		const login = () => {
			// store.dispatch('login',login_form.value);
			store.login(login_form.value)
		}

		const register = () => {
			// store.dispatch('register', register_form.value);
			store.register(register_form.value)
		}

console.log('new',login_form)
		return {
			login_form,
			register_form,
			login,
			register
		}
	}
}
</script>

<style>


.forms {
	display: flex;
	min-height: 100vh;
}

form {
	flex: 1 1 0%;
	padding: 8rem 1rem 1rem;
}

/* form.register {
	color: #FFF;
	background-color: rgb(245, 66, 101);
	background-image: linear-gradient(
		to bottom right,
		rgb(245, 66, 101) 0%,
		rgb(189, 28, 60) 100%
	);
} */

h2 {
	font-size: 2rem;
	text-transform: uppercase;
	margin-bottom: 2rem;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;

	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}

input:focus:not([type="submit"]) {
	opacity: 1;
}

input::placeholder {
	color: inherit;
}

form.register input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}

form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}

form.register input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	text-transform: uppercase;
}
</style>