<template>
<div class="login">
<div class="container">
<div class="login-card">
<h1>Welcome to VerdeChain</h1>
<p>Connect your wallet to start sustainable investing</p>
<button @click="connectWallet"class="btn btn-primary btn-lg">
<i class="bi bi-wallet2"></i>
Connect Wallet
</button>
<div class="login-divider">
<span>or</span>
</div>
<div class="email-login">
<input v-model="email"type="email"placeholder="Enter your email"/>
<button @click="signInWithEmail"class="btn btn-outline">
Continue with Email
</button>
</div>
<p class="terms">
By connecting, you agree to our
<a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
</p>
</div>
</div>
</div>
</template>
<script setup>
import{ref}from'vue'
import{useAuthStore}from'@/stores/auth'
import{useRouter}from'vue-router'
const authStore=useAuthStore()
const router=useRouter()
const email=ref('')
const connectWallet=async()=>{
await authStore.connectWallet()
router.push('/')
}
const signInWithEmail=()=>{
console.log('Email login:',email.value)
}
</script>
<style scoped>
.login{
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
background:linear-gradient(135deg,#00B89420,#00CEC920);
}
.login-card{
background:white;
border-radius:1rem;
padding:3rem;
text-align:center;
max-width:400px;
width:100%;
box-shadow:0 20px 40px rgba(0,0,0,0.1);
}
.login-card h1{
margin-bottom:1rem;
}
.login-card p{
color:#6b7280;
margin-bottom:2rem;
}
.btn-lg{
padding:1rem 2rem;
font-size:1.125rem;
}
.login-divider{
margin:2rem 0;
position:relative;
}
.login-divider span{
background:white;
padding:0 1rem;
color:#6b7280;
}
.login-divider::before{
content:'';
position:absolute;
top:50%;
left:0;
right:0;
height:1px;
background:#e5e7eb;
z-index:-1;
}
.email-login{
display:flex;
gap:0.5rem;
margin-bottom:2rem;
}
.email-login input{
flex:1;
padding:0.75rem;
border:2px solid #e5e7eb;
border-radius:0.5rem;
}
.terms{
font-size:0.875rem;
color:#6b7280;
margin-top:2rem;
}
.terms a{
color:#00B894;
text-decoration:none;
}
</style>
