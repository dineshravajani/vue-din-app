<template>
    <div class="contact-us-form form-container">
        <h2>Contact Us</h2>
        
        <form @submit="submitContactForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="contactFormValues.name" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="contactFormValues.email" required />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="contactFormValues.message" required></textarea>
            </div>
            <button type="submit" :disabled="loading">Submit</button>
        </form>
        <p v-if="loading">Please wait...</p>
        <p v-if="successMessage || errorMessage" :class="successMessage ? 'success' : 'error'">
            {{ successMessage || errorMessage }}
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contactFormValues: {
                    name: "",
                    email: "",
                    message: "",
                },
                loading:false,
                successMessage: "",
                errorMessage: "",
            }
        },
        methods : {
            async submitContactForm(e) {
                e.preventDefault();
                console.log(this.contactFormValues)
                this.loading = true;
                this.successMessage = '';
                this.errorMessage = '';

                try {
                    const response = await fetch( "https://api.web3forms.com/submit", {
                        method : 'POST',
                        headers : {
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify({
                            access_key:"a004c493-eb3d-40bf-97b5-9da703a60aa9",
                            ...this.contactFormValues
                        }),
                    });

                    if( !response.ok) {
                        throw new Error('Failed to send message');
                    }
                    this.successMessage = 'Your message has been sent successfully';
                    this.contactFormValues.name = "";
                    this.contactFormValues.email = "";
                    this.contactFormValues.message = "";
                } catch ( error ) {
                    this.errorMessage = "An error occurred while sending your message. Please try again later.";
                } finally {
                    this.loading = false;
                }
            }
        },
    }
</script>

<style scoped>

.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

/* Form title */
h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Form group */
.form-group {
  margin-bottom: 15px;
}

/* Labels */
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

/* Inputs and textarea */
input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.2);
}

/* Submit button */
button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #999;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

/* Success and error messages */
.success {
  color: green;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}

</style>