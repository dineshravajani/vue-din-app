import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    state: () => ({
            counter:7,
            posts:[]
    }),
    getters: {
        getCount(state) {
            return state.counter
        }
    },
    actions:{
        incrementCount() {
            this.counter++
        },
        decrementCount() {
            this.counter--
        },
        async getPosts(limit) {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

                if( !response.ok){
                    console.log('Error')
                } else {
                    this.posts = await response.json();
                    this.incrementCount()
                    console.log(this.posts)
                }
            } catch(error) {
                console.log(error)
            }
        }
    }
})