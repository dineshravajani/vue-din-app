<template>
    <div class="product-list">
        <h1>Product List Pinia</h1>
        <router-link v-if="cart.length > 0" to="/cart" class="view-cart">View cart</router-link>
        <div class="product-container">
            <div v-for="product in products" :key="product.id" class="product-item">
                <h3>{{ product.name }}</h3>
                <p>Price : ${{ product.price }}</p>
                <button 
                    class="add-to-cart-btn" 
                    :disabled="isAdding[product.id]" 
                    @click="handleAddToCart(product)">
                    {{ isAdding[product.id] ? 'Adding...' : 'Add to cart' }}
                    
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { ref } from 'vue';
    export default {
        name:"ProductListPinia",
        setup() {
            const isAdding = ref({})
            const cartStore = useCartStore();
            const cart = ref([]);
            const products = [
                    {
                        id:1,
                        name:"Mobile",
                        price:100,
                    },
                    {
                        id:2,
                        name:"Charger",
                        price:200,
                    },
                    {
                        id:3,
                        name:"Laptop",
                        price:500,
                    },
                ]
            const handleAddToCart = async (product) => {
                isAdding.value[product.id] = true;
                await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate async operation
                cartStore.addToCart(product);
                isAdding.value[product.id] = false;
            }
            cart.value = cartStore.cart;
            return {
                products,
                isAdding,
                cart,
                handleAddToCart
            }
        }
    }
</script>

<style scoped>
.product-list {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
}

.product-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  gap: 20px; /* Space between products */
}

.product-item {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-item h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.product-item p {
  font-size: 1rem;
  color: #777;
}

.add-to-cart-btn {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #218838;
}
.view-cart {
  display: inline-block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.view-cart:hover {
  background-color: #2980b9;
}
</style>