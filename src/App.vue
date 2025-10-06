<template>
  <div class="container">
    <h1 class="hero">HTL Dornbirn 5bWI</h1>

    <div v-if="error" class="error">⚠️ {{ error }}</div>

    <div :class="['grid', { loading }]">
      <article class="card" v-for="p in people" :key="p.email + p.uuid">
        <img class="hero" :src="p.image" :alt="p.firstname + ' ' + p.lastname" loading="lazy" />
        <div class="title">{{ p.firstname }} {{ p.lastname }}</div>
        <div class="body">
          {{ lorem }}
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchPersons } from './services/api'

const people = ref([])
const error = ref('')
const loading = ref(false)
const lorem = 'Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut turpis. Nunc imperdiet augue dis suspendisse.'

async function load() {
  loading.value = true
  error.value = ''
  try {
    people.value = await fetchPersons(8)
  } catch (e) {
    error.value = e?.message || 'Fehler beim Laden.'
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>
