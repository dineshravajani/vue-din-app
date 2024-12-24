<template>
    <div>
        <h1>This is Parent Component</h1>
    </div>
</template>

<script>
    export default {
        name : 'Parent',

        beforeCreate() {
            console.log('Parent BeforeCreate()');
        },
        created() {
            console.log('Parent Created()');
        },
        beforeMount() {
            console.log('Parent BeforeMount()');
        },
        mounted() {
            console.log('Parent Mounted()');
        },
        beforeUpdate() {
            console.log('Parent BeforeUpdate()');
        },
        updated() {
            console.log('Parent Updated()');
        }


    }
</script>

<style scoped>

</style>