<template>
  <article class="card">
    <header>
      <img class="avatar" :src="person.image" :alt="person.firstname + ' ' + person.lastname" loading="lazy" />
      <div>
        <div class="name">{{ person.firstname }} {{ person.lastname }}</div>
        <div class="small">{{ person.email }}</div>
      </div>
    </header>
    <div class="small">
      <div><span class="badge">Job</span> {{ person.profession }}</div>
      <div><span class="badge">Phone</span> {{ person.phone }}</div>
      <div><span class="badge">Birth</span> {{ person.birthday }}</div>
      <div v-if="person.address"><span class="badge">City</span> {{ person.address.city }}, {{ person.address.country }}</div>
    </div>
    <footer v-if="person.website">
      🔗 <a :href="person.website" target="_blank" rel="noreferrer">Website</a>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  person: { type: Object, required: true }
})
</script>
