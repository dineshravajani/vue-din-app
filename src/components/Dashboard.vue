<template>
    <div>
        <h1> Welcome : {{ authStore.user.username }} </h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
    export default {
        name:"Dashboard",
        setup() {
            const authStore= useAuthStore();
            const router = useRouter();

            const logout = () => {
                authStore.logout();
                router.push('/login')
            }
            return {
                authStore,
                logout
            }
        }
    }
</script>

<style scoped>

</style>