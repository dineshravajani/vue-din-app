<template>
    <header class="header">
      <nav class="nav">
        <ul class="nav-list">
            <li><router-link to="/" class="nav-link">Home</router-link></li>
            <li v-if="!authStore.isAuthenticated"><router-link to="/login" class="nav-link">Login</router-link></li>
            <li v-if="authStore.isAuthenticated"><router-link to="/dashboard" class="nav-link">Dashboard</router-link></li>
            <li class="nav-item dropdown">
              <span class="nav-link">Pinia Demos
				<span class="dropdown-icon">▼</span> <!-- Dropdown icon -->
			  </span>
              <ul class="dropdown-menu">
                <li><router-link to="/shop" class="dropdown-link">Products</router-link></li>
                </ul>
            </li>

            <li class="nav-item dropdown">
              <span class="nav-link">Firebase Demos
				<span class="dropdown-icon">▼</span> <!-- Dropdown icon -->
			  </span>
              <ul class="dropdown-menu">
                <li><router-link to="/firebase/list-articles" class="dropdown-link">List Articles</router-link></li>
                <li><router-link to="/firebase/add-article" class="dropdown-link">Add Article</router-link></li>
                <li><router-link to="/firebase/user/register" class="dropdown-link">Register</router-link></li>
                <li><router-link to="/firebase/user/login" class="dropdown-link">Login</router-link></li>
                </ul>
            </li>

            <li><router-link to="/articles" class="nav-link">Articles</router-link></li>
            <li><router-link :to="{name:'contact'}" class="nav-link">Contact Us</router-link></li>
			<li><router-link to="/piniademo" class="nav-link">Pinia Demo</router-link></li>
			<li><router-link to="/piniaduplicate" class="nav-link">Pinia Duplicate</router-link></li>
            <!-- New menu with submenu -->
            <li class="nav-item dropdown">
              <span class="nav-link">Demo
				<span class="dropdown-icon">▼</span> <!-- Dropdown icon -->
			  </span>
              <ul class="dropdown-menu">
                <li><router-link to="/tipcalculator" class="dropdown-link">Tip Calculator</router-link></li>
                <li><router-link to="/todolist" class="dropdown-link">ToDo List</router-link></li>
                <li><router-link to="/imagechanger" class="dropdown-link">Image Changer</router-link></li>
                <li><router-link to="/products" class="dropdown-link">Products</router-link></li>
                <li><router-link to="/getadvice" class="dropdown-link">Get Advice</router-link></li>
                <li><router-link to="/togglepassword" class="dropdown-link">Toggle Password</router-link></li>
                
              </ul>
            </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import { useAuthStore } from '@/store/auth';
  export default {
    name: "Header",
    setup() {
      const authStore = useAuthStore();

      return {
        authStore
      }
    }
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #3498db; /* Blue color */
    padding: 10px 20px;
  }
  
  .nav {
    display: flex;
    justify-content: center;
  }
  
  .nav-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-link {
    text-decoration: none;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-link:hover {
    background-color: #2980b9; /* Darker blue */
    color: #f1c40f; /* Yellow */
    border-radius: 5px;
  }
  .router-link-active {
    background-color: #2980b9; /* Darker blue */
    color: #f1c40f; /* Yellow */
    border-radius: 5px;
  }
  .nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-item {
  position: relative;
}

.nav-link {
  text-decoration: none;
  padding: 10px 15px;
  display: block;
}

.dropdown-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.nav-item:hover .dropdown-menu {
  display: block;
}

.dropdown-link {
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  color: black;
  white-space: nowrap;
}

.dropdown-link:hover {
  background: #f0f0f0;
}
  </style>
  