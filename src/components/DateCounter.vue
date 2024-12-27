<template>
    <div class="date-counter">
        <div class="buttons">
            <button class="btn btn-prev" @click="count--">Previous Date</button>
            <button class="btn btn-today" @click="count=0">Today's Date</button>
            <button class="btn btn-next" @click="count++">Next Date</button>
            <br>
            <p class="date-text">
                {{  count == 0 ? 'Today is' : count > 0 ? `${count} day${count > 1 ? 's' : ''} from Today is ` : `${Math.abs(count)} day${count > 1 ? 's' : ''} from Ago was` }} 
                <span class="highlight">{{ formattedDate }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
    export default {
        name:"DateCounter",
        setup() {
            const count = ref(0)
            const baseDate = new Date()
            const formattedDate = computed( () => {
                const updatedDate = new Date(baseDate);
                updatedDate.setDate(baseDate.getDate() + count.value)

                return  updatedDate.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                });
            })
            

            return {
                count,
                formattedDate
            }
        }
    }
</script>

<style scoped>
.date-counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.btn-prev {
  background-color: #f44336;
  color: white;
}

.btn-today {
  background-color: #4caf50;
  color: white;
}

.btn-next {
  background-color: #2196f3;
  color: white;
}

.btn:hover {
  opacity: 0.8;
}

.date-text {
  font-size: 18px;
  font-weight: 500;
  color: #333;
  text-align: center;
}

.highlight {
  font-weight: bold;
  color: #ff5722;
}
</style>