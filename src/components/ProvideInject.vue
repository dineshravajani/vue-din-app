<template>
    <div>
        <h1>Provide Inject Parent Component - {{ name }}</h1>
        <h1>Parent Component Count - {{ count  }}</h1>
        <h1>Parent Component Hero - {{ firstName }} {{ lastName }}</h1>

        <button @click="incrementCount">Increment Count</button>
        <ChildA/>
    </div>
</template>

<script>
import ChildA from './ChildA.vue';
import { provide, reactive, ref, toRefs } from 'vue';
    export default {
        name:"ProvideInject",
        setup() {
            provide('c_userName','Din Channel')

            const count = ref(0)
            function incrementCount() {
                count.value++;
            }
            const state = reactive({
                firstName:"Bruce",
                lastName:"Vein"
            })

            provide('c_count', count)
            provide('c_hero', state)
            provide('incrementCount',incrementCount)

            return {
                count,
                ...toRefs(state),
                incrementCount
            }
        },
        components:{
            ChildA
        },
        data() {
            return {
                name:'DinTurner',
            }
        },
        provide() {
            return {
                userName:this.name,
            }
        }
    }
</script>

<style scoped>

</style>