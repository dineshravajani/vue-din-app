<template>
    <div>
        <h2>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
        <h2>Composition - {{ c_firstName }}</h2>
        <h2>Composition - {{ greet }}</h2>
        <h2>Composition - {{ greetHero }}</h2>
        <h2>Reactive - {{ reactiveGreetHero }}</h2>
        
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
    export default {
        name:"Data",
        setup() {
            const c_firstName = ref('Clarke');
            const c_lastName = ref('Kent');
            const c_heroName = ref('Batman');
            
            const greet = `Hello ${c_firstName.value}`;
            const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`;
            const state = reactive({
                firstName: "Princess",
                lastName: "Diana",
                heroName: "Wonder Woman",
            });

            const reactiveGreetHero = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`
            return {
                c_firstName,
                greet,
                greetHero,
                reactiveGreetHero
            }

            /*const isLoggedIn = ref(false);
            const isLoggedInReactive = reactive({
                value:false
            });*/
        },
        data() {
            return {
                o_firstName: "Din",
                o_lastName: "Turner",
                o_heroName: "Superman",
            }
        }
    }
</script>

<style scoped>

</style>