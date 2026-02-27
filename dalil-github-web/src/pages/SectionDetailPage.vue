<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { guideSections, teamMembers } from '../data/guideContent'
import { readmeFullContent } from '../data/readmeFullContent'

const route = useRoute()
const repositoryRawBase = 'https://raw.githubusercontent.com/c3ziz/Dalil-git-github/main/'

const section = computed(() => guideSections.find((item) => item.id === route.params.id))
const sourceContent = computed(() => {
  if (!section.value) return null
  return readmeFullContent[section.value.id] || null
})

const normalizeHeading = (text) => text.replace(/^\*+|\*+$/g, '').trim()

const resolveImageSrc = (path) => {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path

  const cleanedPath = path.replace(/^\.\//, '').trim()
  if (cleanedPath.startsWith('images/')) {
    return `${repositoryRawBase}${cleanedPath}`
  }

  return cleanedPath
}

const parseImageLine = (line) => {
  const markdownMatch = line.match(/^!\[(.*?)\]\((.+?)\)$/)
  if (markdownMatch) {
    const [, altText, srcPath] = markdownMatch
    return {
      alt: altText?.trim() || 'صورة توضيحية',
      src: resolveImageSrc(srcPath),
    }
  }

  const customMatch = line.match(/^!\s*(.*?)\s+(images\/[^\s]+\.(?:png|jpe?g|gif|webp|svg))$/i)
  if (customMatch) {
    const [, altText, srcPath] = customMatch
    return {
      alt: altText?.trim() || 'صورة توضيحية',
      src: resolveImageSrc(srcPath),
    }
  }

  return null
}

const looksLikeHeading = (line, subsectionSet) => {
  if (!line) return false
  if (subsectionSet.has(line)) return true
  if (/^\*.+\*$/.test(line)) return true
  if (/^[📌📍📂📄📁🚀🛠️🤖🖥️💡⚠️].+/.test(line)) return true
  if (/^[0-9]+\.\s+.+/.test(line) && line.length < 90) return true
  if (line.endsWith(':') && line.length < 100) return true
  return false
}

const organizedBlocks = computed(() => {
  if (!section.value) return []

  if (!sourceContent.value?.blocks?.length) {
    return []
  }

  const subsectionSet = new Set(section.value.subsections || [])
  const lines = []

  sourceContent.value.blocks.forEach((block) => {
    ;(block.paragraphs || []).forEach((paragraph) => {
      if (paragraph?.trim()) lines.push(paragraph.trim())
    })
    ;(block.bullets || []).forEach((bullet) => {
      if (bullet?.trim()) lines.push(bullet.trim())
    })
    ;(block.codeBlocks || []).forEach((codeBlock) => {
      codeBlock
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .forEach((line) => lines.push(line))
    })
  })

  const result = []
  let current = {
    id: 'organized-0',
    heading: section.value.title,
    paragraphs: [],
    bullets: [],
    images: [],
    codeBlocks: [],
  }

  const pushCurrent = () => {
    if (current.paragraphs.length || current.bullets.length || current.codeBlocks.length) {
      result.push(current)
    }
  }

  lines.forEach((line, index) => {
    const isSectionTitleLine = line === `${section.value.number}. ${section.value.title}` || line === section.value.title
    if (isSectionTitleLine) return

    if (looksLikeHeading(line, subsectionSet)) {
      pushCurrent()
      current = {
        id: `organized-${result.length}`,
        heading: normalizeHeading(line),
        paragraphs: [],
        bullets: [],
        images: [],
        codeBlocks: [],
      }
      return
    }

    const imageEntry = parseImageLine(line)
    if (imageEntry) {
      current.images.push(imageEntry)
      return
    }

    const looksLikeCommand = /^(git|mkdir|touch|pwd|ls|cd|cp|mv|rm)\b/.test(line)
    if (looksLikeCommand) {
      const lastCodeIndex = current.codeBlocks.length - 1
      if (lastCodeIndex >= 0) {
        current.codeBlocks[lastCodeIndex] = `${current.codeBlocks[lastCodeIndex]}\n${line}`
      } else {
        current.codeBlocks.push(line)
      }
      return
    }

    const isBulletLike = /^[-*]\s+/.test(line)
    if (isBulletLike) {
      current.bullets.push(line.replace(/^[-*]\s+/, '').trim())
      return
    }

    current.paragraphs.push(line)

    if (index === lines.length - 1) {
      pushCurrent()
    }
  })

  if (!result.length && (current.paragraphs.length || current.bullets.length || current.codeBlocks.length)) {
    result.push(current)
  }

  return result
})
</script>

<template>
  <section v-if="section" class="glass" data-reveal>
    <h2>{{ section.number }}. {{ section.title }}</h2>
    <p class="section-intro">{{ section.summary }}</p>

    <section v-if="section.id === 'team'" class="detail-block" data-reveal>
      <h3>الأشخاص الذين قاموا بإعداد هذا الدليل</h3>
      <div class="team-grid">
        <article v-for="member in teamMembers" :key="member.name" class="member-card" data-reveal>
          <div class="member-avatar">{{ member.name.charAt(0) }}</div>
          <h3>{{ member.name }}</h3>
          <a :href="member.url" target="_blank" rel="noopener" class="inline-link">GitHub Profile</a>
        </article>
      </div>
    </section>

    <template v-if="section.id !== 'team'">
      <section v-for="block in organizedBlocks" :key="block.id" class="detail-block" data-reveal>
        <h3>{{ block.heading }}</h3>

        <p v-for="paragraph in block.paragraphs || []" :key="paragraph">{{ paragraph }}</p>

        <ul v-if="block.bullets?.length" class="detail-list">
          <li v-for="bullet in block.bullets" :key="bullet">{{ bullet }}</li>
        </ul>

        <figure v-for="image in block.images || []" :key="image.src" class="content-image-wrap">
          <img :src="image.src" :alt="image.alt" class="content-image" loading="lazy" />
          <figcaption>{{ image.alt }}</figcaption>
        </figure>

        <pre v-for="code in block.codeBlocks || []" :key="code" class="source-code"><code>{{ code }}</code></pre>
      </section>
    </template>

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
