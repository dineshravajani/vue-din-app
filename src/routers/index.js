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
import LoginForm from "@/components/LoginForm.vue";
import Dashboard from "@/components/Dashboard.vue";
import ProductListPinia from "@/components/ProductListPinia.vue";
import { useAuthStore } from "@/store/auth";
import CartPage from "@/components/CartPage.vue";
import FirebaseListArticles from "@/components/FirebaseListArticles.vue";
import FirebaseAddArticle from "@/components/FirebaseAddArticle.vue";
import FirebaseUpdateArticle from "@/components/FirebaseUpdateArticle.vue";
import FirebaseUserRegister from "@/components/FirebaseUserRegister.vue";
import ColorForm from "@/components/ColorForm.vue";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path:'/',component:Steps},
        {path:'/articles',component:Articles},
        {path:'/login',component:LoginForm},
        {
            path:'/dashboard',
            component:Dashboard,
            beforeEnter:(to,from,next) => {
                const authStore = useAuthStore();
                authStore.validateToken();
                console.log('Authenticated',authStore.isAuthenticated);
                if(!authStore.isAuthenticated) next('/login');
                else next();
            }
        },
        {path:'/article/:articleID',component:ArticleDetail,props:true},
        {path:'/piniademo',component:PiniaDemo},
        {path:'/piniaduplicate',component:PiniaDemoDuplicate},
        {path:'/products',component:ProductList},
        {path:'/cart',component:CartPage},
        {path:'/contactus',component:ContactUsForm,name:"contact"}, 
        {path:'/tipcalculator',component:TipCalculator},
        {path:'/todolist',component:TodoItem},
        {path:'/imagechanger',component:ImageChanger},
        {path:'/getadvice',component:GetAdvice},
        {path:'/togglepassword',component:TogglePassword},
        {path:'/colorform',component:ColorForm},
        {path:'/shop',component:ProductListPinia},
        {path:'/:noFound(.*)',component:PageNotFound}, 


        {path:'/firebase/list-articles',component:FirebaseListArticles},
        {path:'/firebase/add-article',component:FirebaseAddArticle},
        {path:'/firebase/update-article/:id',component:FirebaseUpdateArticle,props:true},
        {path:'/firebase/user/register',component:FirebaseUserRegister},
        {path:'/firebase/user/login',component:FirebaseUserRegister},
    ]
})

export default router;