<template>
    <div>
        <h1>{{ name  }}</h1>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        name: "DemoOne",
        setup() {
            const name = ref("Din")
            setTimeout( () => {
                name.value = "Turner"
            },2000);
            return {
                name
            }
        }
    }
</script>

<style scoped>

</style>