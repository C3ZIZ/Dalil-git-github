<script setup>
import { RouterLink } from 'vue-router'
import { guideSections } from '../data/guideContent'
</script>

<template>
  <section class="glass" data-reveal>
    <h2>جميع أقسام الدليل</h2>
    <p class="section-intro">
      اختر القسم الذي تريد مراجعته، وكل صفحة تقدم ملخصًا واضحًا ونقاطًا عملية قابلة للتطبيق.
    </p>

    <div class="cards-grid">
      <article v-for="section in guideSections" :key="section.id" class="feature-card" data-reveal>
        <h3>{{ section.number }}. {{ section.title }}</h3>
        <p>{{ section.summary }}</p>
        <RouterLink :to="`/sections/${section.id}`" class="inline-link">فتح الصفحة</RouterLink>
      </article>
    </div>
  </section>
</template>
