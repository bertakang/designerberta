<template>
    <div>
      <h1>Enter Password</h1>
      <form @submit.prevent="verifyPassword">
        <input type="password" v-model="password" placeholder="Enter password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const password = ref('')
  const router = useRouter()
  
  const correctPassword = 'your-secret-password' // The password you want to use
  
  const verifyPassword = () => {
    if (password.value === correctPassword) {
      // Store the password verification flag in localStorage
      localStorage.setItem('passwordVerified', 'true')
  
      // Redirect back to the protected page or a default page
      router.push('/uxresearch') // Or wherever the user needs to go after verifying
    } else {
      alert('Incorrect password! Try again.')
    }
  }
  </script>
  