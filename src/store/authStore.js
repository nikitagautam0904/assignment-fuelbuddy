import { defineStore } from 'pinia';
import router from '../router';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async login(details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch(error.code) {
            case 'auth/user-not-found':
              alert("User not found")
              break
            case 'auth/wrong-password':
              alert("Wrong password")
              break
            default:
              alert("Something went wrong")
          }
  
          return
        // Handle errors
      }

      this.user = auth.currentUser; // Update the user property directly

      router.push('/');
    },
    async register(details) {
      const { email, password, name } = details;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
      } catch (error) {

        switch(error.code) {
            case 'auth/email-already-in-use':
              alert("Email already in use")
              break
            case 'auth/invalid-email':
              alert("Invalid email")
              break
            case 'auth/operation-not-allowed':
              alert("Operation not allowed")
              break
            case 'auth/weak-password':
              alert("Weak password")
              break
            default:
              alert("Something went wrong")
          }
  
          return
        // Handle errors
      }

      this.user = auth.currentUser; 

      router.push('/');
    },
    async logout() {
      await signOut(auth);

      this.user = null;

      router.push('/login');
    },
    fetchUser() {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          this.user = null; 
        } else {
          this.user = user; 

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/login');
          }
        }
      });
    }
  }
});
