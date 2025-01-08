<template>
    <div class="register">
        <h1>Register</h1>
        <form @submit.prevent="submitLogin">
            <input
                type="email"
                placeholder="Your email"
                v-model="formData.email"
                required
            />
            <input
                type="password"
                placeholder="Your password"
                v-model="formData.password"
                required
            />
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script setup>
    import { AUTH } from '@/firebase/config';
    import { createUserWithEmailAndPassword } from 'firebase/auth';
    import { reactive } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    const router = useRouter();
    const formData = reactive({
        email:'',
        password:''
    });

    const submitLogin = () => {

    }
</script>

<style scoped>

</style>