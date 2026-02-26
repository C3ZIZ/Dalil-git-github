<script setup>
import { computed, ref } from 'vue'
import { generalKnowledgeQuestionBank } from '../data/quizData'

const QUIZ_SIZE = 10

const shuffle = (items) => {
  const cloned = [...items]
  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[cloned[index], cloned[randomIndex]] = [cloned[randomIndex], cloned[index]]
  }
  return cloned
}

const questions = ref([])
const selectedAnswers = ref([])

const generateQuiz = () => {
  questions.value = shuffle(generalKnowledgeQuestionBank).slice(0, QUIZ_SIZE)
  selectedAnswers.value = Array.from({ length: QUIZ_SIZE }, () => null)
}

const answeredCount = computed(() => selectedAnswers.value.filter((item) => item !== null).length)

const score = computed(() => {
  return questions.value.reduce((acc, question, index) => {
    return acc + (selectedAnswers.value[index] === question.correctIndex ? 1 : 0)
  }, 0)
})

generateQuiz()
</script>

<template>
  <section class="glass" data-reveal>
    <h2>Quiz 1 — General Knowledge</h2>
    <p class="section-intro">
      هذا الاختبار يسحب 10 أسئلة عشوائية من بنك أكبر من 30 سؤالًا. بعد اختيار إجابتك ستظهر
      الإجابة الصحيحة مع شرح مختصر.
    </p>

    <div class="quiz-toolbar">
      <p>الإجابات: {{ answeredCount }} / {{ questions.length }} | النتيجة: {{ score }} / {{ questions.length }}</p>
      <button class="ghost-button" type="button" @click="generateQuiz">أسئلة عشوائية جديدة</button>
    </div>

    <article v-for="(question, qIndex) in questions" :key="question.id" class="quiz-card" data-reveal>
      <h3>{{ qIndex + 1 }}. {{ question.question }}</h3>

      <div class="quiz-options">
        <button
          v-for="(option, optionIndex) in question.options"
          :key="option"
          type="button"
          class="quiz-option"
          :class="{
            selected: selectedAnswers[qIndex] === optionIndex,
            correct: selectedAnswers[qIndex] !== null && optionIndex === question.correctIndex,
            wrong:
              selectedAnswers[qIndex] !== null &&
              selectedAnswers[qIndex] === optionIndex &&
              optionIndex !== question.correctIndex,
          }"
          @click="selectedAnswers[qIndex] = optionIndex"
        >
          {{ option }}
        </button>
      </div>

      <div v-if="selectedAnswers[qIndex] !== null" class="quiz-feedback">
        <p class="feedback-title">
          {{ selectedAnswers[qIndex] === question.correctIndex ? '✅ إجابة صحيحة' : '❌ إجابة غير صحيحة' }}
        </p>
        <p><strong>الإجابة الصحيحة:</strong> {{ question.options[question.correctIndex] }}</p>
        <p><strong>الشرح:</strong> {{ question.explanation }}</p>
      </div>
    </article>
  </section>
</template>
