<script>
import Greet from './components/Greet.vue'
import Article from './components/Article.vue'
export default {
	components:{
		Greet,
		Article
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

	}
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
	<Article title="Five Danger Roads" :likes="40" :is-published="false"/>
	<Greet :name="firstName" :lastname="lastName"/>
	
	<h2>Current volume : {{ volume }}</h2>
	<button @click="volume = volume+2">Increment</button>
	<button @click="volume = volume-2">Decrement</button>
	
	<h2>Full Name {{ firstName }} {{ lastName }}</h2>
	<h2>Computed Full Name {{fullName}}</h2>
	<button @click="items.push({id:111,name:'pen',price:100})">Add Items</button>
	<h2> Cart total : {{  cartTotal }}</h2>
	<template v-for="item in items" :key="item.id">
		<h2 v-if="item.price > 300">{{ item.name }} {{ item.price }}</h2>

	</template>
	<h2 v-for="item in expensiveItems" :key="item.id">{{ item.name }} {{  item.price }}</h2>
	<pre>
		{{ JSON.stringify(formValues, null, 2) }}
	</pre>
	<form @submit="submitForm">
		<div>
			<label for="yourname">Your Name</label>
			<input type="text" id="yourname" v-model="formValues.yourname" />
		</div>
		<div>
			<label for="country">Country</label>
			<select v-model="formValues.country">
				<option>Select Country</option>
				<option value="india">India</option>
				<option value="usa">United States</option>
				<option value="uk">United Kingdon</option>
			</select>
		</div>
		<div>
			<label for="profile"> Profile Summary</label>
			<textarea id="profile" v-model="formValues.profileSummary"/>
		</div>
		<div>
			<label for="job-location">Job Location</label>
			<select id="job-location" v-model="formValues.jobLocation" multiple>
				<option>Select Country</option>
				<option value="india">India</option>
				<option value="uae">United Arab Emirated</option>
				<option value="singapore">Singapore</option>
			</select>
		</div>
		<div>
			<input type="checkbox" id="remote-work" v-model="formValues.remoteWork" true-value="yes" false-value="no"/>
			<label for="remote-work">Open to remote work ?</label>
		</div>

		<div>
			<label>Skills</label>
			<input type="checkbox" id="html" value="html" v-model="formValues.skillSet" />
			<label for="html">HTML</label>

			<input type="checkbox" id="css" value="css" v-model="formValues.skillSet" />
			<label for="css">CSS</label>

			<input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet" />
			<label for="javascript">Javascript</label>
		</div>

		<div>
			<label>Years of Experience</label>
			<input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExp" />
			<label for="0-2">0-2</label>

			<input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExp" />
			<label for="3-5">3-5</label>

			<input type="radio" id="5+" value="5+" v-model="formValues.yearsOfExp" />
			<label for="5+">5+</label>

		</div>
		<div>
			<button>Submit</button>
		</div>
	</form>
	<h1>My Name is : {{ name  }}</h1>
	<div>
		<button v-on:click="name='Dinesh'">Change name</button>
		<button v-on:click="changeName">Change name with method</button>
		<button v-on:click="changeName( $event ), increment(10)">Multiple method on single click</button>
	</div>
	<h1>Counter value is : {{ count  }}</h1>
	<div>
		<button v-on:click="increment(1)">Increment by 1</button>
		<button v-on:click="decrement(1)">Decrement by 1</button>

		<button v-on:click="increment(5)">Increment by 5</button>
		<button v-on:click="decrement(5)">Decrement by 5</button>
		
	</div>
	<h1>{{ 2+3+5 }}</h1>
	<h1>Add Method  : {{ add(1,2,3) }}</h1>
	<h1>Multipy Method  : {{ multiply(10) }}</h1>
	
	<h1>Multipy with Base Value  : {{ multiply( baseValue ) }}</h1>
	<hr>
	<h1> Conditional Rendering</h1>
	
	<template v-for="(name,index) in names" :key="name">
		<h2 v-if="name === 'Grapes'">{{ name }}</h2>
	</template>
	
	<hr>
	<h2 v-for="(name,index) in names" :key="name"> {{ index }} {{ name }}</h2>
	<h2 v-for="name in fullNames"> {{ name.first }} {{ name.last }}</h2>
	<div v-for="actor in actors">
		<h1>{{ actor.name }}</h1>
		<h3 v-for="movie in actor.movies">{{ movie }}</h3>
	</div>
	<h1 v-for="(value, key, index) in myInfo">{{key}} {{index}} {{ value  }}</h1>
	<h1 v-if="num === 0">Number is zero</h1>
	<h1 v-else-if="num < 0">Number is negative</h1>
	<h1 v-else-if="num > 0">Number is postive</h1>
	<h1 v-else>Not a number</h1>

  <template v-if="display">
      <h1>Din Turner</h1>
      <h1>London</h1>
      <h1>Wordpress Enthusiast</h1>
  </template>
    <h1 v-show="showElement">V show element</h1>
	

  <h3>{{ greet }} Name is {{ name  }}</h3>
  <br>
  <h3>{{ channel }}</h3>
  <div v-html="channel"></div>
  <h1 v-bind:id="headingId">Heading</h1>
  <button v-bind:disabled="isDisabled">My Button</button>
  <h2 class="underline">Underlined Text</h2>
  <br>
  <h2 class="underline" v-bind:class="status">Danger</h2>
  <h1 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h1>
  <h1 v-bind:class="isSoldout ?  'sold-out' : 'new'">Movie is sold out</h1>
  <h1 v-bind:class="['promoted','new']">Newly Promoted Movie</h1>
  <h1 v-bind:class="[isPromoted && 'promoted', isSoldout ? 'sold-out' : 'new']">Array Conditional Movie</h1>
  <h2 v-bind:class="{
    promoted:isPromoted,
    new: !isSoldout,
    'sold-out': isSoldout
  }">Object Conditional Movie</h2>
  <h1 v-bind:style="{
    color:highlightColor,
    'font-size':headingSize + 'px'
  }">Inline style</h1>
  <h1 v-bind:style="headerStyleObject">Header Style Object</h1>
  <h1 :style="headerStyleObject">V Bind shorthand operator</h1>
  <!-- <p><button @click="count++">Count is: {{ count }}</button></p> -->
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
