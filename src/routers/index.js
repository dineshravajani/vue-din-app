import { createRouter, createWebHistory } from "vue-router";
import Articles from "@/components/Articles.vue";
import ContactUsForm from "@/components/ContactUsForm.vue";
import Steps from "@/components/Steps.vue";
import ProductList from "@/components/ProductList.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";
import PageNotFound from "@/components/404.vue";
import TipCalculator from "@/components/TipCalculator.vue";
import TodoItem from "@/components/TodoItem.vue";
import ImageChanger from "@/components/ImageChanger.vue";
import GetAdvice from "@/components/GetAdvice.vue";
import TogglePassword from "@/components/TogglePassword.vue";
import PiniaDemo from "@/components/PiniaDemo.vue";
import PiniaDemoDuplicate from "@/components/PiniaDemoDuplicate.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',component:Steps},
        {path:'/articles',component:Articles},
        {path:'/article/:articleID',component:ArticleDetail,props:true},
        {path:'/piniademo',component:PiniaDemo},
        {path:'/piniaduplicate',component:PiniaDemoDuplicate},
        {path:'/products',component:ProductList},
        {path:'/contactus',component:ContactUsForm,name:"contact"}, 
        {path:'/tipcalculator',component:TipCalculator},
        {path:'/todolist',component:TodoItem},
        {path:'/imagechanger',component:ImageChanger},
        {path:'/getadvice',component:GetAdvice},
        {path:'/togglepassword',component:TogglePassword},
        {path:'/:noFound(.*)',component:PageNotFound}, 
    ]
})

export default router;