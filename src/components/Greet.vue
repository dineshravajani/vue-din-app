<template>
    <div>
        <h2>Hello {{ name  }} {{ lastname }}</h2>
    </div>
</template>

<script>
    export default {
        name:"Greet",
        props:["name","lastname"]
    }
</script>

<style scoped>

</style>