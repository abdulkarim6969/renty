<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Login to Your Account</h1>

      <form @submit.prevent="handleLogin" class="login-form">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit" class="submit-button">Login</button>
      </form>

      <div class="divider">or</div>

      <button @click="loginWithGoogle" class="login-button google">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" />
        Continue with Google
      </button>

      <button @click="loginWithGithub" class="login-button github">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
        Continue with GitHub
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '@/services/api';       // adjust path if needed
// import router from '@/router';           // if you want to navigate on success

const email = ref('');
const password = ref('');
const errorMsg = ref('');

const handleLogin = async () => {
  errorMsg.value = '';
  try {
    const response = await api.post('/auth/login', {
      email: email.value,
      password: password.value,
    });
    const { token } = response.data;
    // store JWT
    localStorage.setItem('jwtToken', token);
    // redirect to dashboard (or home)
    // router.push({ name: 'Home' });
  } catch (err) {
    // Axios wraps errors—this handles network vs. 4xx/5xx
    if (err.response) {
      errorMsg.value = err.response.data.message || 'Invalid credentials';
    } else {
      errorMsg.value = 'Network error, try again later';
    }
  }
};

const loginWithGoogle = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/google';
};

const loginWithGithub = () => {
  window.location.href = 'http://localhost:8080/oauth2/authorization/github';
};
</script>
<style scoped >

html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.error {
  color: #c53030;
  margin-bottom: 12px;
  font-size: 14px;
}


.login-container {
  position: fixed;    /* pin it to the viewport */
  top: 0; left: 0;
  width: 100vw;       /* span full width */
  height: 100vh;      /* span full height */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  /* remove any leftover padding/margin from parent */
  box-sizing: border-box;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.login-box h1 {
  font-size: 24px;
  margin-bottom: 24px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.login-form input {
  padding: 10px;
  font-size: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.submit-button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #2980b9;
}

.divider {
  margin: 20px 0;
  font-size: 14px;
  color: #888;
}

.login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 12px;
  width: 100%;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.login-button img {
  width: 20px;
  height: 20px;
}

.login-button.google {
  background-color: #db4437;
  color: white;
}

.login-button.google:hover {
  background-color: #c1351d;
}

.login-button.github {
  background-color: #24292e;
  color: white;
}

.login-button.github:hover {
  background-color: #1b1f23;
}
</style>
