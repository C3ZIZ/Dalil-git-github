<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const storedTheme = localStorage.getItem('guide-theme')
const theme = ref(storedTheme === 'light' ? 'light' : 'dark')

const themeLabel = computed(() => (theme.value === 'dark' ? '🌙' : '☀️'))

const applyTheme = () => {
  document.body.classList.toggle('light', theme.value === 'light')
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('guide-theme', theme.value)
  applyTheme()
}

let revealObserver

const setupReveal = () => {
  const cards = [...document.querySelectorAll('[data-reveal]')]
  if (!cards.length) return

  if (!('IntersectionObserver' in window)) {
    cards.forEach((element) => element.classList.add('is-visible'))
    return
  }

  if (revealObserver) {
    revealObserver.disconnect()
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
  )

  cards.forEach((element) => {
    if (!element.classList.contains('is-visible')) {
      revealObserver.observe(element)
    }
  })

  window.setTimeout(() => {
    cards.forEach((element) => element.classList.add('is-visible'))
  }, 900)
}

onMounted(async () => {
  applyTheme()
  await nextTick()
  setupReveal()
  window.requestAnimationFrame(setupReveal)
  window.setTimeout(setupReveal, 180)
})

watch(
  () => route.fullPath,
  async () => {
    await nextTick()
    setupReveal()
  },
  { immediate: true }
)
</script>

<template>
  <div class="page-shell" dir="rtl">
    <header class="site-header glass" data-reveal>
      <div>
        <h1 class="brand">دليل Git & GitHub</h1>
        <p class="tagline">مرجع عملي للمبتدئين لإتقان Git وGitHub خطوة بخطوة</p>
      </div>

      <nav class="top-nav" aria-label="التنقل الرئيسي">
        <RouterLink to="/" class="nav-link">الرئيسية</RouterLink>
        <RouterLink to="/sections" class="nav-link">الأقسام</RouterLink>
        <RouterLink to="/cheat-sheet" class="nav-link">Cheat Sheet</RouterLink>
        <RouterLink to="/quiz/general" class="nav-link">Quiz عام</RouterLink>
        <RouterLink to="/quiz/engineer" class="nav-link">المهندس الكبير</RouterLink>
        <RouterLink to="/team" class="nav-link">فريق العمل</RouterLink>
      </nav>

      <button class="theme-toggle" @click="toggleTheme" aria-label="تبديل السمة">
        {{ themeLabel }}
      </button>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <p>© 2026 Dalil GitHub - عزيز الرهيب</p>
    </footer>
  </div>
</template>
