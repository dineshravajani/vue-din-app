<template>
    <h1>To-Do List</h1>
    <div>
      <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
      <button @click="addTask">Add Task</button>
      <p v-if="tasks.length > 0">You have total {{ tasks.length }} task{{  tasks.length > 1 ? 's' : '' }}</p>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <span :class="{ completed: task.completed }">
            <template v-if="task.isEditing">
                <input type="text" v-model="task.text" />
            </template>
            <template v-else>
                {{ task.text }}
            </template>
          </span>
            <template v-if="task.isEditing">
                <button @click="updateTask(index)">Update</button>
                <button @click="toggleEdit(index)">Cancel</button>
            </template>
            <template v-else>
                <button @click="toggleEdit(index)">Edit</button>
                <button class="delete-btn" @click="deleteTask(index)">Delete</button>
            </template>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({ text: this.newTask, completed: false,isEditing:false });
          this.newTask = '';
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
      editTask(index) {
        this.tasks[index].isEditing = !this.tasks[index].isEditing;
      },
      toggleEdit(index) {
        this.tasks[index].isEditing = !this.tasks[index].isEditing;
      },
      updateTask(index) {
        this.tasks[index].isEditing = !this.tasks[index].isEditing;
      },
    },
  };
  </script>
  
  <style scoped>
/* General Styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}
h1 {
    text-align: center;
}
/* Main Container */
div {
  max-width: 500px;
  margin: 50px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Input and Button */
input {
  width: calc(100% - 100px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 10px;
}

button:hover {
  background-color: #0056b3;
}

/* Task List */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border-bottom: none;
}

/* Task Text */
.completed {
  text-decoration: line-through;
  color: gray;
}

span {
  flex-grow: 1;
  margin-right: 10px;
}

/* Success/Error Messages */
p {
  font-size: 14px;
  color: #007bff;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'arial';
}
button.delete-btn {
    background-color: #ff0000;
}
</style>
