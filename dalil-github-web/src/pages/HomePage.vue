<script setup>
import { RouterLink } from 'vue-router'
import { guideSections, gitCheatSheetCategories, quickGitCommands } from '../data/guideContent'

const spotlightSections = guideSections.slice(0, 4)
const cheatPreview = gitCheatSheetCategories.slice(0, 3)
const githubEducationSection = guideSections.find((section) => section.id === 'github-education')
</script>

<template>
  <section class="hero glass" data-reveal>
    <h2>ابدأ رحلتك مع Git وGitHub</h2>
    <p>
      هذا الموقع يبسط محتوى دليل Dalil GitHub في تجربة مرئية واضحة وسريعة، ويغطي الأساسيات وحتى
      التعاون الفعلي عبر الفروع وطلبات الدمج.
    </p>

    <div class="hero-actions">
      <RouterLink to="/sections" class="cta-button">استعراض جميع الأقسام</RouterLink>
      <RouterLink to="/readme" class="ghost-button">README</RouterLink>
      <RouterLink to="/cheat-sheet" class="ghost-button">Cheat Sheet</RouterLink>
      <RouterLink to="/team" class="ghost-button">تعرف على فريق العمل</RouterLink>
    </div>
  </section>

  <section class="glass" data-reveal>
    <h2>الأقسام الأساسية</h2>
    <div class="cards-grid">
      <article
        v-for="section in spotlightSections"
        :key="section.id"
        class="feature-card"
        data-reveal
      >
        <h3>0{{ section.number }}. {{ section.title }}</h3>
        <p>{{ section.summary }}</p>
        <RouterLink :to="`/sections/${section.id}`" class="inline-link">اقرأ التفاصيل</RouterLink>
      </article>
    </div>
  </section>

  <section class="glass" data-reveal>
    <div class="section-head">
      <h2>Cheat Sheet شامل</h2>
      <RouterLink to="/cheat-sheet" class="cta-button heading-cta">عرض المرجع الكامل</RouterLink>
    </div>
    <p class="section-intro">تمت تغطية الأوامر بشكل كامل مع التصنيف ووقت الاستخدام المناسب.</p>

    <div class="cards-grid">
      <article v-for="category in cheatPreview" :key="category.id" class="feature-card" data-reveal>
        <h3>{{ category.title }}</h3>
        <p>يغطي {{ category.items.length }} أمر</p>
        <ul class="mini-list">
          <li v-for="item in category.items.slice(0, 2)" :key="item.command">
            <code>{{ item.command }}</code>
            <span>{{ item.when }}</span>
          </li>
        </ul>
      </article>
    </div>

    <div class="hero-actions compact-actions">
      <article v-for="item in quickGitCommands.slice(0, 1)" :key="item.cmd" class="command-row preview-row">
        <code>{{ item.cmd }}</code>
        <p>{{ item.desc }}</p>
      </article>
    </div>
  </section>

  <section v-if="githubEducationSection" class="glass" data-reveal>
    <h2>{{ githubEducationSection.number }}. {{ githubEducationSection.title }}</h2>
    <p class="section-intro">{{ githubEducationSection.summary }}</p>
    <div class="hero-actions">
      <RouterLink :to="`/sections/${githubEducationSection.id}`" class="cta-button"
        >عرض خطوات التفعيل</RouterLink
      >
      <a
        href="https://github.com/settings/education/benefits"
        target="_blank"
        rel="noopener noreferrer"
        class="ghost-button"
        >فتح صفحة التقديم الرسمية</a
      >
    </div>
  </section>
</template>
