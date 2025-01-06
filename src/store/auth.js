import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth',{
    state: () => ({
        user:JSON.parse(localStorage.getItem('user')) || null,
        token:localStorage.getItem('token') || null
    }),
    getters: {
        isAuthenticated(state) {
            return state.token
        }
    },
    actions:{
        login(username, password) {
            if( username === 'din' && password === 'din') {
                this.user = {username};
                this.token = 'dintoken';
                const currentTime = Date.now();

                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', this.token);
                localStorage.setItem('tokenExpiry', currentTime + 60*60*1000) // 1 Hour
            } else {
                throw new Error('Invalid credentials');
            }
        },
        logout(){
            this.user = null;
            this.token = null;
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiry')
        },
        validateToken() {
            const tokenExpiry = localStorage.getItem('tokenExpiry');
            if( tokenExpiry && Date.now() > tokenExpiry) {
                this.logout();
            }
        }
    },
});