<template>
    <div>
        <h1>Get Advice API Example</h1>
        <p v-if="adviceMsgCount > 0">You have displayed a total of {{ adviceMsgCount }} advice{{ adviceMsgCount > 1 ? 's' : '' }}!!!</p>
        <button @click="getAdvice" :disabled="loading">Get Advice</button>
        <p v-if="advice">{{ advice }}</p>
        <p v-if="loading">Loading...</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                advice:'',
                loading:false,
                error:'',
                adviceMsgCount:0,
            }
        },
        mounted() {
            this.getAdvice(); // Fetch advice when the component is loaded
        },
        methods : {
            async getAdvice() {
                this.loading = true;
                this.error = '';

                try {
                    // Call your API here
                    const response = await fetch("https://api.adviceslip.com/advice");
                    const data = await response.json();
                    this.advice = data.slip.advice;  // Assuming API returns advice in this format
                    this.adviceMsgCount++;
                } catch (err) {
                    this.error = "Error fetching advice: " + err.message;  // Handle error
                } finally {
                    this.loading = false;  // End loading state
                }
            }
        },
    }
</script>

<style scoped>

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

p {
  font-size: 18px;
  color: #333;
}

.error {
  color: red;
}

.loading {
  color: gray;
}

</style>