<template>
  <div v-for="oggetto in oggetti" :key="oggetto.id">
    <h3>{{ oggetto.nome }}</h3>
    <img :src="oggetto.immagineBase64" alt="Immagine di {{ oggetto.nome }}" />
    <!-- altri dati… -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

// Stato reattivo
const oggetti = ref([])
const email = localStorage.getItem('emailUtente')

// Fetch degli oggetti all'avvio del componente
onMounted(async () => {
  try {
    const resp = await api.get('/api/oggetti', { params: { email } })
    oggetti.value = resp.data
  } catch (error) {
    console.error('Errore nel caricamento degli oggetti:', error)
  }
})
</script>
