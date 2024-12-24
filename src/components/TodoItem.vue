<template>
    <h1>To-Do List</h1>
    <div>
      <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
      <button @click="addTask">Add Task</button>
      <p v-if="taskCount > 0">You have total {{ taskCount }} task{{  taskCount > 1 ? 's' : '' }}</p>
      <p>Filter :
        <select v-model="taskFilter">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
      	</select>
	  	Bulk Actions
        <select v-model="bulkAction" @change="performBulkAction">
			<option value="">Select option</option>
			<option value="markCompleted">Mark as completed</option>
		</select>
      </p>
      
      
      <template v-if="taskCount > 0">
		<p><input type="checkbox" id="selectAll" v-model="isSelectedAll" @change="toggleSelectAll"/><label for="selectAll">Select All</label></p>
        <ul>
          <li v-for="(task, index) in filteredTasks" :key="index">
            <span :class="{ completed: task.completed }">
              <template v-if="task.isEditing">
                  <input type="text" v-model="task.text"/>
              </template>
              <template v-else>
				<input type="checkbox" v-model="task.isSelected" @change="updateSelectAll"/>
                  {{ task.text }}
              </template>
            </span>
              <template v-if="task.isEditing">
                  <button @click="updateTask(task)">Update</button>
                  <button @click="toggleEdit(task, index)">Cancel</button>
              </template>
              <template v-else>
                  <button @click="toggleEdit(task, index)">Edit</button>
                  <button :class="task.completed ? 'pending-btn' : 'delete-btn'"  @click="toggleTask(task)">{{ task.completed ? 'Move to Pending' : 'Mark as completed'}}</button>
              </template>
          </li>
        </ul>
      </template>
      <p v-if="taskCount == 0" class="no-task">No task found</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: '',
        tasks: [],
        taskFilter:'all',
		bulkAction:'',
		isSelectedAll:false
      };
    },
    methods: {
      getTaskIndex( index ){
        const taskIndex = this.tasks.findIndex(task => task.text === this.filteredTasks[index].text);
        return taskIndex;
      },
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({ text: this.newTask, completed: false,isEditing:false,isSelected:false });
          this.newTask = '';
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      },
      
      toggleTask(task) {
        task.completed = !task.completed;
      },
      toggleEdit(task, index) {
        task.isEditing = !task.isEditing;
		
      },
      updateTask(task) {
        task.isEditing = false;
      },
	  performBulkAction () {
		if( this.bulkAction == 'markCompleted') {
			this.filteredTasks.forEach( task => {
				if( task.isSelected == true ) {
					task.completed = true;
				}
			});
			this.bulkAction = '';
			this.filteredTasks.forEach( task => {
				task.isSelected = false;
			});
			this.isSelectedAll = false;
		}
	  },
	  toggleSelectAll () {
		this.filteredTasks.forEach( task => {
			task.isSelected = this.isSelectedAll;
		});
	  },
	  updateSelectAll () {
		// Recalculate `selectAll` based on individual task selections
		this.isSelectedAll = this.filteredTasks.every( (task) => task.isSelected);
	  }
    },
    computed : {
      filteredTasks() {
        if( this.taskFilter == 'all') {
          return this.tasks;
        } else if( this.taskFilter == 'pending') {
          return this.tasks.filter( task => !task.completed )
        } else if( this.taskFilter == 'completed') {
          return this.tasks.filter( task => task.completed )
        }
        return this.tasks; // Default case
      },
      taskCount () {
        return this.filteredTasks.length;
      }
    }
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
button.pending-btn {
    background-color: #87A96B;
}
p.no-task {
  color: #ff0000;
}
input[type="checkbox"] {
	width: auto;
}
</style>
