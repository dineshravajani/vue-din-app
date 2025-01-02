<template>
    <header class="header">
      <nav class="nav">
        <ul class="nav-list">
            <li><router-link to="/" class="nav-link">Home</router-link></li>
            <li><router-link to="/articles" class="nav-link">Articles</router-link></li>
            <li><router-link to="/products" class="nav-link">Products</router-link></li>
            <li><router-link :to="{name:'contact'}" class="nav-link">Contact Us</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
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
  </style>
  