<template>
    <div>
        <h1>Child A Component</h1>
        <ChildB/>
    </div>
</template>

<script>
import ChildB from './ChildB.vue';

    export default {
        name:"ChildA",
        components:{
            ChildB
        },
        
        
    }
</script>

<style scoped>

</style>