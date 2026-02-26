<script setup>
import { gitCheatSheetCategories } from '../data/guideContent'
</script>

<template>
  <section class="glass" data-reveal>
    <h2>Git Cheat Sheet — كامل ومصنّف</h2>
    <p class="section-intro">
      مرجع شامل يغطي الأوامر الأساسية والمتقدمة، مع توضيح وظيفة كل أمر ومتى تستخدمه عمليًا.
    </p>
  </section>

  <section v-for="category in gitCheatSheetCategories" :key="category.id" class="glass" data-reveal>
    <h3 class="cheat-category-title">{{ category.title }}</h3>

    <div class="cheat-table-wrap">
      <table class="cheat-table">
        <thead>
          <tr>
            <th>الأمر</th>
            <th>ماذا يفعل</th>
            <th>متى أستخدمه</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in category.items" :key="`${category.id}-${item.command}`">
            <td><code>{{ item.command }}</code></td>
            <td>{{ item.use }}</td>
            <td>{{ item.when }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
