<template>
    <div class="cart-item-wrapper">
        <h1>Your Cart</h1>
        <div v-if="cartStore.cart.length > 0">
            <h2>Total: ${{ cartStore.totalPrice }}</h2>
            <h3>Items: {{ cartStore.totalItems }}</h3>
            <button @click="handleClearCart">Clear Cart</button>
            <div class="cart-items">
                <CartItem v-for="item in cartStore.cart" :key="item.id" :item="item"/>
            </div>
        </div>
        
        <p v-else class="cart-empty-msg">Nothing in your cart</p>
    </div>
</template>

<script>
import { useCartStore } from '@/store/cart';
import { ref } from 'vue';
import CartItem from './CartItem.vue';
    export default {
        name:"CartPage",
        components:{
            CartItem
        },
        setup() {
            const cart = ref([])
            const cartStore = useCartStore();
            
            const handleClearCart = () => {
                cartStore.clearCart();
            }
            return {
                cartStore,
                handleClearCart
            }
        }

    }
</script>

<style scoped>

/* Parent container to apply the grid layout */
.cart-item-wrapper {
  padding: 20px;
  margin: 0 auto;
}

.cart-item-wrapper h1, .cart-item-wrapper h2, .cart-item-wrapper h3 {
  text-align: center;
}

.cart-item-wrapper button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.cart-item-wrapper button:hover {
  background-color: #2980b9;
}

/* Grid layout for cart items */
.cart-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 items per row */
  gap: 20px; /* Space between items */
}

.cart-empty-msg {
    text-align: center;
}
/* Responsive design for tablet and mobile */
@media (max-width: 1024px) {
  .cart-items {
    grid-template-columns: repeat(2, 1fr); /* 2 items per row on tablets */
  }
}

@media (max-width: 600px) {
  .cart-items {
    grid-template-columns: 1fr; /* 1 item per row on mobile */
  }
}

</style>