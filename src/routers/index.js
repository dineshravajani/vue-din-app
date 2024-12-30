import { createRouter, createWebHistory } from "vue-router";
import Articles from "@/components/Articles.vue";
import ContactUsForm from "@/components/ContactUsForm.vue";
import Steps from "@/components/Steps.vue";
import ProductList from "@/components/ProductList.vue";
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Steps},
        {path:'/articles',component:Articles},
        {path:'/products',component:ProductList},
        {path:'/contactus',component:ContactUsForm}, 
    ]
})

export default router;