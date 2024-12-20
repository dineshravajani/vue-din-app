<template>
    <div>
        <h1>Article Component</h1>
        <h1>{{ title }}</h1>
        <h1>Likes : {{ likes }}</h1>
        <h1>Published : {{  isPublished ? 'Yes' : 'No' }}</h1>
    </div>
</template>

<script>
    export default {
        name:"Article",
        props:{
            title:String,
            likes:Number,
            isPublished:Boolean,
        }
    }
</script>

<style scoped>

</style>