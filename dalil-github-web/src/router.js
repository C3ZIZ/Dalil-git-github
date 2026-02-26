import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import SectionsPage from './pages/SectionsPage.vue'
import SectionDetailPage from './pages/SectionDetailPage.vue'
import TeamPage from './pages/TeamPage.vue'
import GeneralQuizPage from './pages/GeneralQuizPage.vue'
import EngineerQuizPage from './pages/EngineerQuizPage.vue'
import CheatSheetPage from './pages/CheatSheetPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/sections', name: 'sections', component: SectionsPage },
    { path: '/sections/:id', name: 'section-detail', component: SectionDetailPage },
    { path: '/cheat-sheet', name: 'cheat-sheet', component: CheatSheetPage },
    { path: '/quiz/general', name: 'quiz-general', component: GeneralQuizPage },
    { path: '/quiz/engineer', name: 'quiz-engineer', component: EngineerQuizPage },
    { path: '/team', name: 'team', component: TeamPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
