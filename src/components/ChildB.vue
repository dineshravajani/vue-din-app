<template>
    <div>
        <h1>Child B</h1>
        <h2>Child B Component Username - {{ userName }}</h2>
        <h2>Child B Component Composition Username - {{ childUsername }}</h2>

        <h2>Child B component Count - {{ childCount }}</h2>
        <h2>Child B component Hero - {{ firstName }} {{ lastName }}</h2>
        <button @click="incrementCount">Increment Count Child B</button>
        
    </div>
</template>

<script>
import { inject, toRefs } from 'vue';
    export default {
        name:"ChildB",
        setup() {
            const childUsername = inject('c_userName','Default username')
            const childCount  = inject('c_count',0)
            const childHero  = inject('c_hero',{})
            const incrementCount = inject('incrementCount')

            return {
                childUsername,
                childCount,
                ...toRefs(childHero),
                incrementCount
            }
        },
        inject:['userName']
        
        
    }
</script>

<style scoped>

</style>