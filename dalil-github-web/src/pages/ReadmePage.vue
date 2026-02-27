<script setup>
import { onMounted, ref } from 'vue'
import { marked } from 'marked'

const repositoryUrl = 'https://github.com/c3ziz/Dalil-git-github'
const githubReadmeApi = 'https://api.github.com/repos/c3ziz/Dalil-git-github/readme'
const readmeSources = [
  'https://raw.githubusercontent.com/c3ziz/Dalil-git-github/main/README.md',
  'https://raw.githubusercontent.com/c3ziz/Dalil-git-github/master/README.md',
]

const loading = ref(true)
const error = ref('')
const htmlContent = ref('')
const markdownRoot = ref(null)

marked.setOptions({ gfm: true, breaks: true })

const resolveAbsoluteUrl = (url, baseUrl) => {
  if (!url) return url
  if (/^(https?:|data:|mailto:|tel:|#)/i.test(url)) return url

  try {
    return new URL(url, baseUrl).toString()
  } catch {
    return url
  }
}

const normalizeMarkdownAssetPaths = (markdownText, baseUrl) => {
  if (!markdownText || !baseUrl) return markdownText

  return markdownText.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_fullMatch, altText, sourcePath) => {
    const absoluteSource = resolveAbsoluteUrl(sourcePath.trim(), baseUrl)
    return `![${altText}](${absoluteSource})`
  })
}

const decodeBase64Utf8 = (base64Text) => {
  try {
    const binaryString = atob(base64Text)
    const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0))
    return new TextDecoder('utf-8').decode(bytes)
  } catch {
    return ''
  }
}

const tryFetchText = async (url) => {
  try {
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) return null
    return {
      markdownText: await response.text(),
      baseUrl: url.replace(/[^/]+$/, ''),
    }
  } catch {
    return null
  }
}

const tryGithubApiReadme = async () => {
  try {
    const response = await fetch(githubReadmeApi, { cache: 'no-store' })
    if (!response.ok) return null

    const payload = await response.json()
    if (!payload?.content) return null

    const markdownText = decodeBase64Utf8(payload.content.replace(/\n/g, ''))
    if (!markdownText) return null

    return {
      markdownText,
      baseUrl: payload.download_url?.replace(/[^/]+$/, '') || 'https://raw.githubusercontent.com/c3ziz/Dalil-git-github/main/',
    }
  } catch {
    return null
  }
}

const loadReadme = async () => {
  loading.value = true
  error.value = ''

  try {
    let readmePayload = await tryGithubApiReadme()

    if (!readmePayload) {
      for (const source of readmeSources) {
        readmePayload = await tryFetchText(source)
        if (readmePayload) break
      }
    }

    if (!readmePayload?.markdownText) throw new Error('تعذر تحميل README من كل المصادر')

    const normalizedMarkdown = normalizeMarkdownAssetPaths(readmePayload.markdownText, readmePayload.baseUrl)

    htmlContent.value = marked.parse(normalizedMarkdown)
  } catch (fetchError) {
    error.value = 'حدث خطأ أثناء تحميل README. حاول مرة أخرى لاحقاً.'
    htmlContent.value = ''
    console.error(fetchError)
  } finally {
    loading.value = false
  }
}

const handleMarkdownClick = (event) => {
  const targetLink = event.target.closest('a')
  if (!targetLink) return

  const href = targetLink.getAttribute('href') || ''
  if (!href.startsWith('#')) return

  event.preventDefault()

  const targetId = href.slice(1)
  if (!targetId || !markdownRoot.value) return

  const targetElement = markdownRoot.value.querySelector(`#${CSS.escape(targetId)}`)
  if (!targetElement) return

  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  loadReadme()
})
</script>

<template>
  <section class="glass" data-reveal>
    <h2>README</h2>

    <div class="hero-actions compact-actions">
      <a :href="repositoryUrl" target="_blank" rel="noopener" class="inline-link"
        >فتح المستودع على GitHub</a
      >
    </div>

    <p v-if="loading" class="section-intro">جاري تحميل ملف README...</p>
    <p v-else-if="error" class="section-intro">{{ error }}</p>

    <article ref="markdownRoot" v-else class="markdown-content" v-html="htmlContent" @click="handleMarkdownClick"></article>
  </section>
</template>
