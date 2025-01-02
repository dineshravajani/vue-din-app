import { createRouter, createWebHistory } from "vue-router";
import Articles from "@/components/Articles.vue";
import ContactUsForm from "@/components/ContactUsForm.vue";
import Steps from "@/components/Steps.vue";
import ProductList from "@/components/ProductList.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";
import PageNotFound from "@/components/404.vue";
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',component:Steps},
        {path:'/articles',component:Articles},
        {path:'/article/:articleID',component:ArticleDetail,props:true},
        {path:'/products',component:ProductList},
        {path:'/contactus',component:ContactUsForm,name:"contact"}, 
        {path:'/:noFound(.*)',component:PageNotFound}, 
    ]
})

export default router;