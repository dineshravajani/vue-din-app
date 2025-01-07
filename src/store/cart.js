import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state:()=>({
        cart:JSON.parse(localStorage.getItem('cart')) || [],
    }),
    actions:{
        addToCart(product){
            const existing = this.cart.find( (item) => item.id === product.id );
            // if product already exist in the cart, then update the quantity
            if( existing ) {
                existing.quantity++;
            } else {
                this.cart.push({...product, quantity:1});
            }
            this.saveToLocalStorage();
            //localStorage.setItem('cart',JSON.stringify(this.cart))
        },
        removeFromCart(productId) {
            this.cart = this.cart.filter((item) => item.id !== productId);
            console.log('cart',this.cart)
            this.saveToLocalStorage();
            //localStorage.setItem('cart',JSON.stringify(this.cart))
        },
        updateQuantity(productId, quantity) {
            console.log('product id', productId)
            console.log('product quantity', quantity)
            const item = this.cart.find( (item) => item.id === productId)
            if( item ) {
                item.quantity = quantity > 0 ? quantity : 1;
                this.saveToLocalStorage();
            }
        },
        clearCart() {
            this.cart = [];
            this.saveToLocalStorage();
            
        },
        saveToLocalStorage() {
            localStorage.setItem('cart',JSON.stringify(this.cart))
        },
    },
    getters:{
        totalPrice(state) {
            return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        totalItems( state ) {
            return state.cart.reduce((total, item) => total + item.quantity, 0);
        }
    }
})