<template>
    <div>
        <h1>Product List</h1>
        <div class="product-list">
            <ul>
                <li v-for="(product,index) in products" :key="index">
                    <p>Product : {{ product.name }}</p>
                    <p>Price : {{ product.price }}</p>
                    <button @click="addToCart(product)">Add to cart</button>
                </li>
            </ul>
        </div>
            <div class="cart-section">
                <h2>Shopping Cart</h2>
                <template v-if="carts.length > 0">
                    <ul>
                        <li v-for="(item, index) in carts" :key="index">
                            <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
                            <p>Quantity : <input type="number" v-model.number="item.quantity" min="1"/></p>
                            <button @click="deleteProductFromCart(index)">Delete</button>
                        </li>
                    </ul>
                    <div class="cart-total">
                        <p>Total: ${{ cartTotal }}</p>
                    </div>    
                </template>
                <p v-if="carts.length == 0" class="cart-empty">Your cart is empty. Please add some products to your cart.</p>
                                
            </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products:[
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
                ],
                carts:[],
            };
        },
        methods:{
            addToCart(product) {
                // Check if product already exist in cart or not
                const existingProduct = this.carts.find(item => item.id === product.id);

                if( existingProduct ) {
                    existingProduct.quantity++;
                } else {
                    this.carts.push({...product,quantity:1});
                }
            },
            deleteProductFromCart(index) {
                this.carts.splice(index, 1);
            }
        },
        computed:{
            cartTotal() {
                return this.carts.reduce((total,item) => total + item.price * item.quantity, 0);
            }
        }
    }
</script>

<style scoped>
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

h1 {
    text-align: center;
    margin-top: 30px;
    font-size: 2rem;
    color: #333;
}

/* Product List Section */
.product-list {
    width: 80%;
    margin: 30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product-list ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
}

.product-list li {
    width: 30%; /* 3 items per row */
    margin-bottom: 20px;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
}

.product-list li p {
    margin: 5px 0;
}

button {
    padding: 10px 15px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

/* Cart Section */
.cart-section {
    width: 80%;
    margin: 30px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-section h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

.cart-section ul {
    margin-bottom: 20px;
}

.cart-section li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.cart-section button {
    background-color: #f44336;
    padding: 8px 15px;
    border-radius: 5px;
    color: #fff;
    border: none;
    cursor: pointer;
}

.cart-section button:hover {
    background-color: #e53935;
}

/* Total Price Section */
.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    text-align: center;
}
.cart-total p {
    text-align: center;
    
}

input[type="number"] {
    width: 60px;
    padding: 5px;
    margin-left: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

input[type="number"]:focus {
    border-color: #4CAF50;
}
p.cart-empty {
    text-align: center;
}
</style>
