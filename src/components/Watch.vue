<template>
    <div>
        <!-- OPTIONS API -->
        <input type="text" placeholder="Name" v-model="name"/>
        
        
        <input type="text" placeholder="First Name" v-model="firstName"/>
        <input type="text" placeholder="Last Name" v-model="lastName"/>
        <!-- Reactive -->
        <input type="text" placeholder="Reactive First Name" v-model="fName"/>
        <input type="text" placeholder="Reactive Last Name" v-model="lName"/>
        <input type="text" placeholder="Reactive Hero Name" v-model="options.heroName"/>
    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue';
    export default {
        name:"Watch",
        setup() {
            const firstName = ref('')
            const lastName = ref('Wayne')

            const state = reactive({
                fName:'',
                lName:'',
                options:{
                    heroName:'',
                }
            })
            
            
            /*
            * This watch function will be used for every property inside watch function
            watch(() => {
                return { ...state }
            },
            function(newValue, oldValue) {
                console.log('fname Old Value', oldValue.fName);
                console.log('fname New Value', newValue.fName);
                console.log('lName Old Value', oldValue.lName);
                console.log('lName New Value', newValue.lName);
                
            })*/

            // Let's say to add watch only for first name
            watch( () => state.options, function(newValue, oldValue){
                console.log('fname Old Value', oldValue);
                console.log('fname New Value', newValue);
            },
            {
                deep:true
            }
        )
            
            /*
            * Only be used only for single value, in our case it is firstName
            watch(firstName, (newValue, oldValue) => {
                console.log('Old value', oldValue);
                console.log('New value', newValue);
            })*/
           // When having multiple fields, watch() accepts array as argument
            watch([firstName, lastName], (newValues, oldValues) => {
                console.log('First Name Old value', oldValues[0]);
                console.log('First Name New value', newValues[0]);

                console.log('Last Name Old value', oldValues[1]);
                console.log('Last Name New value', newValues[1]);
            },{
                immediate:true,
            })
            return {
                firstName,
                lastName,
                ...toRefs(state)
            }
        },
        data() {
            return {
                name:'',
            }
        },
        watch: {
            name(newValue, oldValue) {
                console.log('Old value', oldValue);
                console.log('New value', newValue);
            }
        }
    }
</script>

<style scoped>

</style>