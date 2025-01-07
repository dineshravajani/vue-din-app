<template>
    <div class="cart-item">
        <h3>{{ item.name }}</h3>
        <p>Price: ${{ item.price }}</p>
        <p>Quantity: 
        <input
            type="number"
            v-model.number="item.quantity"
            @change="handleUpdateQuantity"
            class="quantity-input"
        />
        </p>
        <button @click="handleRemoveItem" class="remove-btn">Remove</button>
    </div>
</template>

<script>
import { useCartStore } from '@/store/cart';

    export default {
        name:"CartItem",
        props:['item'],
        setup(props) {
            const cartStore = useCartStore();
            
            const handleRemoveItem = () => {
                cartStore.removeFromCart(props.item.id)
            }
            const handleUpdateQuantity = () => {
                cartStore.updateQuantity(props.item.id, props.item.quantity)
            }

            return {
                
                handleRemoveItem,
                handleUpdateQuantity
            }
        }
    }
</script>

<style scoped>
/* Individual Cart Item Styling */
.cart-item {
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center; /* Center the content */
}

/* Hover effect for cart items */
.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Header Styling */
.cart-item h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

/* Paragraph Styling */
.cart-item p {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
}

/* Quantity Input Styling */
.quantity-input {
  width: 60px;
  padding: 5px;
  margin-left: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

/* Remove Button Styling */
.remove-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

/* Hover effect for remove button */
.remove-btn:hover {
  background-color: #c0392b;
}
</style>