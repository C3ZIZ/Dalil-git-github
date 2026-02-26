<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { guideSections } from '../data/guideContent'

const route = useRoute()

const section = computed(() => guideSections.find((item) => item.id === route.params.id))
</script>

<template>
  <section v-if="section" class="glass" data-reveal>
    <h2>{{ section.number }}. {{ section.title }}</h2>
    <p class="section-intro">{{ section.summary }}</p>

    <ul class="detail-list">
      <li v-for="point in section.points" :key="point" data-reveal>{{ point }}</li>
    </ul>

    <div class="hero-actions">
      <RouterLink to="/sections" class="ghost-button">العودة إلى الأقسام</RouterLink>
      <RouterLink to="/" class="inline-link">الصفحة الرئيسية</RouterLink>
    </div>
  </section>

  <section v-else class="glass" data-reveal>
    <h2>القسم غير موجود</h2>
    <p>الرابط غير صحيح أو تم تعديل القسم. ارجع لقائمة الأقسام.</p>
    <RouterLink to="/sections" class="inline-link">عرض الأقسام</RouterLink>
  </section>
</template>
