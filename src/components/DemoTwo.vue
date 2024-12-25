<template>
    <div>
        <h2>Hello {{ firstName }} {{ lastName }}</h2>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
    export default {
        name:"DemoTwo",
        setup() {
            const state = reactive( {
                firstName:"Din",
                lastName:"Turner",
            });
            setTimeout( () => {
                state.firstName = "Michael";
                state.lastName = "Boss";
                console.log(state);
            },2000);
            return toRefs(state)
                
            
        }
    }
</script>

<style scoped>

</style>