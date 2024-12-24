<template>
    <div class="password-container">
        <h1>Toggle Password Visibility</h1>
        <input :type="fieldType" />
        <button @click="togglePasswordVisibility">{{ fieldType == 'password' ? 'Show Password' : 'Hide Password' }}</button>
    </div>
</template>

<script>
    export default {
        name:"TogglePassword",
        
        data() {
            return {
                fieldType:"password",
            };
        },
        methods : {
            togglePasswordVisibility() {
                this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
            }
        }
    }
</script>

<style scoped>
.password-container {
    text-align: center;
}
</style>