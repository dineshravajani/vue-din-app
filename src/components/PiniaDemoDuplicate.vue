<template>
    <div>
        <h2>Pinia Demo</h2>
        <p>Counter : {{ store.counter }}</p>

        <!-- <button type="button" class="btn btn-primary btn-lg px-4 gap-3" @click="store.incrementCount">
            +
        </button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="store.decrementCount">
        -
        </button> -->
    </div>
</template>

<script>
import { useCounterStore } from '@/store/counter';

    export default {
        name:"PiniaDuplicateDemo",

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