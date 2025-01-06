<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p v-if="error" style="color: red;">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
  import { useRouter } from 'vue-router';
  
  export default {
    name:"LoginForm",

    setup() {
        const username = ref('');
        const password = ref('');
        const error = ref(null);
        const authStore = useAuthStore();
        const router = useRouter();
  
      const handleLogin = async () => {
        try {
          await authStore.login(username.value, password.value);
          router.push('/dashboard');
        } catch (err) {
          error.value = 'Invalid credentials';
        }
      };
  
      //return { handleLogin };
      return {
        username,
        password,
        error,
         handleLogin, 
         authStore 
        };
    },
  };
  </script>
  