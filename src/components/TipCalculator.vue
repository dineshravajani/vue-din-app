<template>
    <div class="tip-container">
        <h1>Tip Calculator</h1>
        <div class="form-group">
            <label>How much is the total Bill Amount ?</label>
            <input type="number" v-model.number="billAmount" @input="calculateTip"/>
        </div>
        <div class="form-group">
            <label>How was the service ?</label>
            <select v-model="billService" @change="calculateTip">
                <option disabled value="">Select service level</option>
                <option value="30">30% (Exceptional)</option>
                <option value="25">25% (More than good)</option>
                <option value="20">20% (Good)</option>
                <option value="15">15% (It was okay)</option>
                <option value="10">10% (Bad)</option>
                <option value="5">5% (Terrible)</option>
            </select>
        </div>
        <div class="form-group">
            <label>How many people are sharing the Bill ?</label>
            <input type="number" v-model.number="billNumberOfPeople" @input="calculateTip" min="1"/>
        </div>
        <div class="final-tip-amount">
            <p v-if="billAmount > 0 && billNumberOfPeople > 0">Tip Amount : {{ tipPerPerson.toFixed(2) }} / person</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                billAmount:0,
                billService:30,
                billNumberOfPeople:1,
                tipPerPerson:0
            }
        },
        methods :{
            calculateTip() {
                if( this.billNumberOfPeople > 0 ) {
                    this.tipPerPerson = ( this.billAmount * ( this.billService/100)) / this.billNumberOfPeople;
                } else {
                    this.tipPerPerson = 0;
                }
            }
        }
    }
</script>

<style scoped>
.tip-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    color: #333;
}

.tip-container h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
    color: #2c3e50;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #34495e;
}

input,
select {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    transition: border-color 0.3s;
}

input:focus,
select:focus {
    border-color: #3498db;
    outline: none;
}

select {
    appearance: none;
    background: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpolygon fill='%233498db' points='0,0 10,0 5,5'/%3E%3C/svg%3E") no-repeat right 10px center;
    background-size: 10px;
}

.final-tip-amount {
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #27ae60;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

button {
    display: inline-block;
    padding: 10px 15px;
    background-color: #3498db;
    color: #fff;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

button:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
}

@media (max-width: 600px) {
    .tip-container {
        padding: 15px;
    }

    .tip-container h1 {
        font-size: 20px;
    }

    input,
    select {
        font-size: 12px;
    }

    .final-tip-amount {
        font-size: 16px;
    }
}
</style>
