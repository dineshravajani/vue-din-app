<template>
    <div>
        <h2>Pinia Demo</h2>
        <p>Counter : {{ store.counter }}</p>
        <p>Counter with getter : {{ store.getCount }}</p>

        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" @click="store.incrementCount">
            +
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="store.decrementCount">
        -
        </button>
        <br><br>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="store.getPosts(10)">
        Get Posts
        </button>
        <ul>
            <li v-for="post in store.posts" :key="post.id">
                <p>{{ post.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { useCounterStore } from '@/store/counter';

    export default {
        name:"PiniaDemo",

        setup() {
            const store = useCounterStore();

            return {
                store
            }
        }
    }
</script>

<style scoped>

</style>