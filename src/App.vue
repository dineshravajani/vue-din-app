<script>
import Greet from './components/Greet.vue'
import Article from './components/Article.vue'
import TodoItem from './components/TodoItem.vue';
import GetAdvice from './components/GetAdvice.vue';
import ContactUsForm from './components/ContactUsForm.vue';
import ProductList from './components/ProductList.vue';
import Parent from './components/Parent.vue';
import TogglePassword from './components/TogglePassword.vue';
import TipCalculator from './components/TipCalculator.vue';
import ImageChanger from './components/ImageChanger.vue';
import FlashCards from './components/FlashCards.vue';
import Data from './components/Data.vue';
import DemoOne from './components/DemoOne.vue';
import DemoTwo from './components/DemoTwo.vue';
import Methods from './components/Methods.vue';
import VModel from './components/VModel.vue';
import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import ProvideInject from './components/ProvideInject.vue';
import TemplateRef from './components/TemplateRef.vue';
import Person from './components/Person.vue';
import DateCounter from './components/DateCounter.vue';
import Steps from './components/Steps.vue';

export default {
	components:{
		Greet,
		Article,
		TodoItem,
		GetAdvice,
		ContactUsForm,
		ProductList,
		Parent,
		TogglePassword,
		TipCalculator,
		ImageChanger,
		FlashCards,
		Data,
		DemoOne,
		DemoTwo,
		Methods,
		VModel,
		Computed,
		Watch,
		ProvideInject,
		TemplateRef,
		Person,
		DateCounter,
		Steps,
		
	},
  	data() {
    return {
		count:0,
		firstName:"Dinesh",
		lastName:"Ravajani",
		names:["Apple","Mango","Grapes"],
		fullNames:[
			{first:'Din',last:'Turn'},
			{first:'Sam',last:'Karan'},
			{first:'Max',last:'Tapar'}
		],
		actors:[
			{name:'Shahrukh Khan',movies:['Kalho na ho','Mobatten']},
			{name:'Salman Khan',movies:['Hum sath sath he','Judwa']},
			{name:'Aamir Khan',movies:['3 Iditos','PK']},
			
		],
		myInfo: {
			name:"Din",
			age:30,
			place:"Mumbai"
		},
		num:"a",
		display:true,
		showElement:false,
		count: 0,
		greet:"Hello",
		name:"Din",
		channel:"<i>Star Plus</i>",
		headingId:"heading",
		isDisabled:true,
		status:"success",
		isPromoted:true,
		isSoldout:true,
		highlightColor:'orange',
		headingSize:40,
		headerStyleObject : {
			color:"orange",
			fontSize:"40px",
			padding:"20px"
		},
		baseMultiplier:5,
		baseValue:55,
		formValues : {
			yourname:'',
			country:'',
			jobLocation:[],
			profileSummary:'',
			remoteWork:"no",
			skillSet:[],
			yearsOfExp:'',
		},
		items:[
			{
				id:12,
				name:"Laptop",
				price:100
			},
			{
				id:13,
				name:"Mobile",
				price:500
			},
			{
				id:14,
				name:"Grocery",
				price:50
			}
		],
		volume:0,
    }
  },
  methods : {
	add(a, b, c) {
		return a + b + c
	},
	multiply(num) {
		return num * this.baseMultiplier
	},
	increment(num) {
		this.count += num
	},
	decrement(num) {
		this.count -= num
	},
	changeName() {
		this.name = 'Paresh'
	},
	submitForm(event) {
		event.preventDefault();
		console.log(this.formValues)

	},
	
  },
  computed : {
	fullName() {
		//return this.firstName + this.lastName
		return `${this.firstName}  ${this.lastName}`
	},
	cartTotal() {
		return this.items.reduce((total, current) => (total = total + current.price), 0)
	},
	expensiveItems() {
		return this.items.filter( item => item.price > 300)
	}

  },
  watch : {
	volume(newValue, oldValue) {
		if(newValue > oldValue && newValue == 16) {
			alert('Listening to a high volume is not recommended')
		}
	}
  }
 
}
</script>

<template>
	<app-header/>
	<router-view />

	<!-- <Steps/> -->
	<!-- <hr/> -->
	<!-- <DateCounter/> -->
	<!-- <hr/> -->
	<!-- <Person/> -->
	<!-- <TemplateRef/> -->
	<!-- <ProvideInject/> -->
	<!-- <Watch/> -->
	<!-- <Computed/> -->
	<!-- <VModel/> -->
	<!-- <Methods/> -->
	<!-- <DemoTwo/> -->
	<!-- <DemoOne/> -->
	<!-- <Data/> -->
	<!-- <FlashCards/>
	<hr>
	<ImageChanger/>
	<hr>
    <TipCalculator/>
	<hr>
	<TodoItem/>
	<hr>
	<GetAdvice/>
	<hr>
	<ContactUsForm/>
	<hr>
	<ProductList/>
	<hr>
	<TogglePassword/> -->
</template>

<style scoped>
button {
  font-weight: bold;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color:#FF0000;
}
.sold-out {
  color:green;
}
</style>
