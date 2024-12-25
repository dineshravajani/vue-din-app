<template>
    <div>
        <h2>Computed in Composition API</h2>
        <!-- Options API-->
         <input type="text" placeholder="First Name" v-model="fName" />
         <input type="text" placeholder="Last Name" v-model="lName" />
         <br><br>
         <h2>Options Full Name is {{ fullName }}</h2>


         <!-- Compostition Ref API-->
         <input type="text" placeholder="First Name" v-model="refFirstName" />
         <input type="text" placeholder="Last Name" v-model="refLastName" />
         <h2>Composition Ref Full Name is {{ refFullName}}</h2>

         <!-- Compostition Reactive API-->
         <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
         <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
         <h2>Composition Reactive Full Name is {{ reactiveFullName}}</h2>
    </div>
</template>

<script>
import {ref, computed, reactive, toRefs} from 'vue'
    export default {
        name:"Computed",
        setup() {
            const refFirstName = ref('')
            const refLastName = ref('')

            const refFullName = computed( function() {
                return `${refFirstName.value} ${refLastName.value}`
            })

            const state = reactive({
                reactiveFirstName:'',
                reactiveLastName:'',
            })

            const reactiveFullName = computed( function() {
                return `${state.reactiveFirstName} ${state.reactiveLastName}`
            })
            return {
                refFirstName,
                refLastName,
                refFullName,
                ...toRefs(state),
                reactiveFullName
            }
        },
        data() {
            return {
                fName:'',
                lName:''
            }
        },
        computed:{
            fullName() {
                return `${this.fName} ${this.lName}`
            }
        }
    }
</script>

<style scoped>

</style>