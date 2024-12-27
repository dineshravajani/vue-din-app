<template>
    <div>
        <h1>Hello Child Component : {{ fullName }}  </h1>
        <button @click="sendEvent">Call Heroes</button>
    </div>
</template>

<script>
import { computed } from 'vue';
    export default {
        name:"PersonGreeting",
        props:['firstName','lastName'],
        setup( props, context ) {
            const fullName = computed( () => {
                return `${props.firstName} ${props.lastName}`
            })
            function sendEvent() {
                context.emit('callHeroes', fullName.value)
            }
            return {
                fullName,
                sendEvent
            }
        },
        emits:['callHeroes'],
        // computed:{
        //     fullName() {
        //         return `${this.firstName} ${this.lastName}`
        //     }
        // }
    }
</script>

<style scoped>

</style>