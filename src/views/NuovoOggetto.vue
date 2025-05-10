<template>
  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Aggiungi Oggetto</h2>

    <form @submit.prevent="submitForm" class="space-y-4">
      <input v-model="form.nome" placeholder="Nome" class="input" required />
      <input v-model="form.descrizione" placeholder="Descrizione" class="input" required />
      <input type="number" v-model.number="form.prezzoGiornaliero" placeholder="Prezzo Giornaliero" class="input" required />
      <!-- Rimosso input email, l'email viene presa da localStorage -->
      <input v-model="form.nomeCategoria" placeholder="Categoria" class="input" required />
      
      <input type="file" @change="handleFileChange" accept="image/*" class="input" required />

      <button type="submit" class="btn">Invia</button>
    </form>

    <div v-if="success" class="mt-4 text-green-600">Oggetto salvato con successo!</div>
    <div v-if="error" class="mt-4 text-red-600">Errore nel salvataggio.</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/services/api'

const form = ref({
  nome: '',
  descrizione: '',
  prezzoGiornaliero: 0,
  nomeCategoria: '',
})

const selectedFile = ref(null)
const success = ref(false)
const error = ref(false)

function handleFileChange(e) {
  selectedFile.value = e.target.files[0]
}

async function submitForm() {
  // Recupera l'email del proprietario da localStorage
  const ownerEmail = localStorage.getItem('emailUtente')
  if (!ownerEmail) {
    error.value = true
    console.error('Email proprietario non trovata in localStorage')
    return
  }

  // Crea payload unendo form e email proprietario
  const payload = {
    ...form.value,
    emailProprietario: ownerEmail,
  }

  const formData = new FormData()
  formData.append('file', selectedFile.value)
  formData.append(
    'dati',
    new Blob([JSON.stringify(payload)], { type: 'application/json' })
  )

  try {
    await api.post('/api/oggetti', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    success.value = true
    error.value = false
  } catch (err) {
    success.value = false
    error.value = true
    console.error(err)
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

.btn {
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
</style>
