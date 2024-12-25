<template>
    <div class="flashcards-container">
        <h1>Questions</h1>
        <p> Click on any question to view its answer.</p>
        <div class="flashcards">
            <div v-for="question in questions" :key="question.id" @click="questionClick(question)" :class="question.isDisplayedAnswer ? 'selected' : ''">
                <p>{{ question.isDisplayedAnswer ? question.answer : question.question }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                questions : [
                        {
                            id: 3457,
                            question: "Which language is Vue written in?",
                            answer: "JavaScript",
                            isDisplayedAnswer:false
                        },
                        {
                            id: 7336,
                            question: "Which Vue directive is used to conditionally render an element?",
                            answer: "v-if",
                            isDisplayedAnswer:false
                        },
                        {
                            id: 8832,
                            question: "In which lifecycle hook is the DOM accessible and ready for manipulation?",
                            answer: "mounted",
                            isDisplayedAnswer:false
                        },
                        {
                            id: 1297,
                            question: "What is the purpose of the inject() method?",
                            answer: "To get data in a component that is provided by another component",
                            isDisplayedAnswer:false
                        },
                        {
                            id: 9103,
                            question: "Which special Vue attribute is recommended to provide when generating elements with v-for?",
                            answer: "key",
                            isDisplayedAnswer:false
                        },
                        {
                            id: 2002,
                            question:"What attribute must be used to make the CSS rules inside the <style> tag of a component local to only that specific component?",
                            answer: "<style scoped>",
                            isDisplayedAnswer:false
                        }
                    ],
            }
        },
        methods :{
            questionClick(question){
                question.isDisplayedAnswer = !question.isDisplayedAnswer;
            }
        }
    }
</script>

<style scoped>
.flashcards-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 50px;
}

.flashcards-container h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.flashcards-container p {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #666;
}
.flashcards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.flashcards div {
    border: 1px solid #e7e7e7;
    background-color: #f7f7f7;
    border-radius: 7px;
    aspect-ratio: 2 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.flashcards-container div.selected {
    border: 1px solid #e03131;
    background-color: #e03131;
    color: #fff;
    font-weight: bold;
    transform: scale(1.05); /* Add a slight zoom effect for selection */
}
.flashcards-container div.selected p {
    color:#fff;
}
</style>