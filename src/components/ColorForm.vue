<template>
    <div class="container">
        <h1>Color Form Example</h1>
        <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
                <label for="title">Name</label>
                <input 
                    type="text" 
                    id="title" 
                    class="input-field"
                    placeholder="Enter Name"
                    v-model.trim="formData.name"
                    required
                />
            </div>

            <div class="form-group">
                <label for="title">Color</label>
                <select v-model="formData.color" required>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Blue</option>
                </select>
            </div>
            <button type="submit" class="submit-btn btn primary">{{isEditing ? 'Update' : 'Save'}}</button>
            <button type="button" class="submit-btn btn  secondary" @click="clearForm">Clear</button>
        </form>
        <table border="1" cellspacing="0" cellpadding="10" class="data-table">
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Action</th>
            </tr>
            <tr v-for="(colorList,index) in colorAddedList" :key="index">
                <td>{{ colorList.name }}</td>
                <td>{{ colorList.color }}</td>
                <td>
                    <a href="javascript:void(0);" @click="editColorList(index)">Edit</a> &nbsp; 
                    <a href="javascript:void(0);" @click="deleteColorList(index)">Delete</a>
                </td>
            </tr>
        </table>
        <div class="circles">
            <div class="circle" :style="{backgroundColor:'red'}">{{ colorCounts.red }}</div>
            <div class="circle" :style="{backgroundColor:'green'}">{{ colorCounts.green }}</div>
            <div class="circle" :style="{backgroundColor:'blue'}">{{ colorCounts.blue }}</div>
        </div>
        
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
    const colorAddedList = ref([])
    const formData = reactive({
        name:'',
        color:''
    });

    const isEditing = ref(false); // Track editing state
    const editIndex = ref(null); // Track the index of the item being edited

    const submitForm= () => {
        if( isEditing.value ) {
            // Update existing item
            colorAddedList.value[editIndex.value] = {name:formData.name, color:formData.color}    
        } else {
            colorAddedList.value.push({name:formData.name,color:formData.color})
        }
        clearForm();

    }
    const clearForm = () => {
        formData.name = '';
        formData.color = '';
        isEditing.value = false;
        editIndex.value = null;
    }
    const editColorList = (index) => {
        const item = colorAddedList.value[index];
        formData.name = item.name;
        formData.color = item.color;
        isEditing.value = true;
        editIndex.value = index;

    }
    const deleteColorList = (index) => {
        if(confirm('Are you sure you want to delete ?')) {
            colorAddedList.value.splice(index,1)
        }
    }
    const colorCounts = computed(() => {
        return colorAddedList.value.reduce(
            (counts, item) => {
            const color = item.color.toLowerCase();
            if (counts[color] !== undefined) {
                counts[color]++;
            }
            return counts;
            },
            { red: 0, green: 0, blue: 0 } // Initial counts
        );
        });

</script>

<style scoped>

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.form {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-field,
.input-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
}

.btn.primary {
  background: #007bff;
  color: white;
}

.btn.secondary {
  background: #6c757d;
  color: white;
}

.btn.action {
  background: #f8f9fa;
  color: #333;
}

.btn.action.danger {
  background: #dc3545;
  color: white;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.data-table th,
.data-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.data-table th {
  background: #f4f4f4;
}

.circles {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
}
</style>