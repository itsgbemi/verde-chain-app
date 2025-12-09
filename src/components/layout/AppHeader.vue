<template>
<header class="app-header">
<div class="container">
<div class="header-left">
<router-link to="/" class="logo">
<i class="bi bi-tree-fill"></i>
<span>VerdeChain</span>
</router-link>
<nav class="main-nav">
<router-link to="/discover">Discover</router-link>
<router-link to="/portfolio">Portfolio</router-link>
<router-link to="/invest">Invest</router-link>
<router-link to="/rewards">Rewards</router-link>
<router-link to="/verification">For Companies</router-link>
</nav>
</div>
<div class="header-right">
<div class="user-info"v-if="user">
<div class="wallet-info">
<span class="vibe-balance">
<i class="bi bi-coin"></i>
{{formatNumber(user.vibeCoins)}}
</span>
<button class="btn btn-outline btn-sm"@click="showWallet">
<i class="bi bi-wallet2"></i>
{{shortAddress(user.walletAddress)}}
</button>
</div>
<div class="user-menu">
<img:src="user.avatar"alt="Avatar"class="avatar"/>
</div>
</div>
<div v-else>
<button class="btn btn-primary"@click="connectWallet">
<i class="bi bi-wallet2"></i>
Connect Wallet
</button>
</div>
</div>
</div>
</header>
</template>
<script setup>
import{ref,computed}from'vue'
import{useAuthStore}from'@/stores/auth'
import{formatNumber,shortAddress}from'@/utils/formatters'
const authStore=useAuthStore()
const user=computed(()=>authStore.user)
const connectWallet=async()=>{
await authStore.connectWallet()
}
const showWallet=()=>{
// Show wallet details
}
</script>
<style scoped>
.app-header{
background:white;
border-bottom:1px solid #e5e7eb;
padding:1rem 0;
position:sticky;
top:0;
z-index:1000;
}
.container{
max-width:1280px;
margin:0 auto;
padding:0 1.5rem;
display:flex;
justify-content:space-between;
align-items:center;
}
.header-left{
display:flex;
align-items:center;
gap:2rem;
}
.logo{
display:flex;
align-items:center;
gap:0.5rem;
font-size:1.25rem;
font-weight:700;
color:#00B894;
text-decoration:none;
}
.main-nav{
display:flex;
gap:1.5rem;
}
.main-nav a{
color:#4b5563;
text-decoration:none;
font-weight:500;
transition:color 0.3s;
}
.main-nav a:hover{
color:#00B894;
}
.main-nav a.router-link-active{
color:#00B894;
border-bottom:2px solid #00B894;
}
.header-right{
display:flex;
align-items:center;
gap:1rem;
}
.user-info{
display:flex;
align-items:center;
gap:1.5rem;
}
.wallet-info{
display:flex;
align-items:center;
gap:1rem;
}
.vibe-balance{
background:linear-gradient(135deg,#00B894,#00CEC9);
color:white;
padding:0.5rem 1rem;
border-radius:2rem;
font-weight:600;
display:flex;
align-items:center;
gap:0.5rem;
}
.avatar{
width:2.5rem;
height:2.5rem;
border-radius:50%;
border:2px solid #00B894;
}
</style>
