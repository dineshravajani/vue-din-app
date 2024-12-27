<template>
    <div class="steps-container">
        <h1>Steps</h1>
        <div class="steps">
            <div class="numbers">
                <div :class="{active: step >= 1}">1</div>
                <div :class="{active: step >= 2}">2</div>
                <div :class="{active: step >= 3}">3</div>
                
            </div>
            <p class="message">
                Step {{step}} : {{messages[step - 1]}}
            </p>
            <div class="buttons">
                <button :style="{backgroundColor:'#7950f2',color:'#fff'}" :disabled="step == 1" @click="step--">Previous</button>
                <button :style="{backgroundColor:'#7950f2',color:'#fff'}" :disabled="step == 3" @click="step++">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
    export default {
        name:"Steps",
        setup() {
            const step = ref(1)
            const messages = ref([
                                "Learn Vue",
                                "Apply for jobs",
                                "Create your new income"
                            ])
            
            return {
                step,
                messages
            }
        }
    }
</script>

<style scoped>
.steps-container h1 {
    text-align: center;
}
.steps {
  width: 600px;
  background-color: #f7f7f7;
  border-radius: 7px;
  padding: 25px 100px;
  margin: 100px auto;
}

.numbers {
  display: flex;
  justify-content: space-between;
}

.numbers > div {
  height: 40px;
  aspect-ratio: 1;
  background-color: #e7e7e7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.numbers .active {
  background-color: #7950f2;
  color: #fff;
}

.message {
  text-align: center;
  font-size: 20px;
  margin: 40px 0;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.buttons button {
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 10px;
}

.buttons button span {
  font-size: 16px;
  line-height: 1;
}
</style>