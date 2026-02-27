<script setup>
import { computed, ref } from 'vue'
import { bigEngineerScenarioBank } from '../data/quizData'

const QUIZ_SIZE = 8

const shuffle = (items) => {
  const cloned = [...items]
  for (let index = cloned.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[cloned[index], cloned[randomIndex]] = [cloned[randomIndex], cloned[index]]
  }
  return cloned
}

const scenarios = ref([])
const selectedAnswers = ref([])

const generateQuiz = () => {
  scenarios.value = shuffle(bigEngineerScenarioBank).slice(0, QUIZ_SIZE)
  selectedAnswers.value = Array.from({ length: QUIZ_SIZE }, () => null)
}

const answeredCount = computed(() => selectedAnswers.value.filter((item) => item !== null).length)

const score = computed(() => {
  return scenarios.value.reduce((acc, scenario, index) => {
    return acc + (selectedAnswers.value[index] === scenario.correctIndex ? 1 : 0)
  }, 0)
})

generateQuiz()
</script>

<template>
  <section class="glass" data-reveal>
    <h2>Quiz 2 — تحدي المهندسين</h2>
    <p class="section-intro">
      سيناريوهات حقيقية من بيئة العمل البرمجية. المطلوب اختيار أفضل تصرف هندسي، ثم مراجعة أفضل
      إجابة مع السبب.
    </p>

    <div class="quiz-toolbar">
      <p>الإجابات: {{ answeredCount }} / {{ scenarios.length }} | النتيجة: {{ score }} / {{ scenarios.length }}</p>
      <button class="ghost-button" type="button" @click="generateQuiz">سيناريوهات جديدة</button>
    </div>

    <article v-for="(scenario, qIndex) in scenarios" :key="scenario.id" class="quiz-card" data-reveal>
      <h3>{{ qIndex + 1 }}. {{ scenario.question }}</h3>

      <div class="quiz-options">
        <button
          v-for="(option, optionIndex) in scenario.options"
          :key="option"
          type="button"
          class="quiz-option"
          :class="{
            selected: selectedAnswers[qIndex] === optionIndex,
            correct: selectedAnswers[qIndex] !== null && optionIndex === scenario.correctIndex,
            wrong:
              selectedAnswers[qIndex] !== null &&
              selectedAnswers[qIndex] === optionIndex &&
              optionIndex !== scenario.correctIndex,
          }"
          @click="selectedAnswers[qIndex] = optionIndex"
        >
          {{ option }}
        </button>
      </div>

      <div v-if="selectedAnswers[qIndex] !== null" class="quiz-feedback">
        <p class="feedback-title">
          {{ selectedAnswers[qIndex] === scenario.correctIndex ? '✅ اختيار ممتاز' : '⚠️ أفضل إجابة مختلفة' }}
        </p>
        <p><strong>أفضل إجابة:</strong> {{ scenario.options[scenario.correctIndex] }}</p>
        <p><strong>التفسير:</strong> {{ scenario.explanation }}</p>
      </div>
    </article>
  </section>
</template>
