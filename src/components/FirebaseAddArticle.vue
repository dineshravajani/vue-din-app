<template>
    <div class="container">
        <div class="form-card">
            <h1 class="form-title">Add Article</h1>
            <form @submit.prevent="submitForm" class="form">
                <div class="form-group">
                    <label for="title">Add Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        class="input-field"
                        placeholder="Enter article title"
                        v-model.trim="formData.title"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea 
                        v-model.trim="formData.description" 
                        id="description"
                        class="textarea-field"
                        placeholder="Enter article description"
                        required
                    ></textarea>

                </div>
                <button type="submit" class="submit-btn">Add</button>
            </form>
        </div>
    </div>
</template>

<script setup>

    import { DB } from '@/firebase/config';
    import { collection, addDoc } from 'firebase/firestore';    
    import { reactive } from 'vue';
    

    const formData = reactive({
        title:'',
        description:''
    })

    const submitForm = async() => {
        const notesCollection = collection(DB, 'notes');

        await addDoc(notesCollection, {
            ...formData
        });
        formData.title = '';
        formData.description = '';
        console.log(formData)
    }

    

</script>

<style scoped>
/* Container for centering the form */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

/* Card style for the form */
.form-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

/* Title Styling */
.form-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

/* General form styling */
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Form group (label + input/textarea) */
.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Input and Textarea Styling */
.input-field,
.textarea-field {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  margin-top: 5px;
  transition: border-color 0.3s ease;
}

/* Focus state for input fields */
.input-field:focus,
.textarea-field:focus {
  border-color: #4caf50;
  outline: none;
}

/* Button Styling */
.submit-btn {
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #45a049;
}

.submit-btn:active {
  background-color: #388e3c;
}

/* Placeholder text */
::placeholder {
  color: #aaa;
}

/* Mobile responsiveness */
@media (max-width: 600px) {
  .form-card {
    padding: 20px;
  }

  .form-title {
    font-size: 20px;
  }
}
</style>