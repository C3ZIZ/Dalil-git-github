<script setup>
import { teamMembers } from '../data/guideContent'
</script>

<template>
  <section class="glass" data-reveal>
    <h2>فريق العمل</h2>
    <p class="section-intro">تم إعداد دليل Dalil GitHub بواسطة هذا الفريق.</p>

    <div class="team-grid">
      <article v-for="member in teamMembers" :key="member.name" class="member-card" data-reveal>
        <div class="member-avatar">{{ member.name.charAt(0) }}</div>
        <h3>{{ member.name }}</h3>
        <a :href="member.url" target="_blank" rel="noopener" class="inline-link">GitHub Profile</a>
      </article>
    </div>
  </section>
</template>
