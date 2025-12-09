<template>
<div class="modal-overlay"@click.self="$emit('close')">
<div class="modal-content">
<div class="modal-header">
<h2>Connect Wallet</h2>
<button @click="$emit('close')"class="modal-close">
<i class="bi bi-x"></i>
</button>
</div>
<div class="wallet-options">
<div class="wallet-option"@click="connect('metamask')">
<div class="wallet-icon">
<i class="bi bi-wallet2"></i>
</div>
<div class="wallet-info">
<h3>MetaMask</h3>
<p>Connect using MetaMask browser extension</p>
</div>
</div>
<div class="wallet-option"@click="connect('walletconnect')">
<div class="wallet-icon">
<i class="bi bi-qr-code"></i>
</div>
<div class="wallet-info">
<h3>WalletConnect</h3>
<p>Scan QR code with mobile wallet</p>
</div>
</div>
<div class="wallet-option"@click="connect('coinbase')">
<div class="wallet-icon">
<i class="bi bi-coin"></i>
</div>
<div class="wallet-info">
<h3>Coinbase Wallet</h3>
<p>Connect using Coinbase Wallet</p>
</div>
</div>
</div>
<div class="modal-footer">
<p class="disclaimer">
By connecting, you agree to our Terms of Service
</p>
</div>
</div>
</div>
</template>
<script setup>
import{useAuthStore}from'@/stores/auth'
const emit=defineEmits(['close'])
const authStore=useAuthStore()
const connect=async(walletType)=>{
try{
await authStore.connectWallet()
emit('close')
}catch(error){
console.error('Connection failed:',error)
}
}
</script>
<style scoped>
.modal-overlay{
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.5);
display:flex;
align-items:center;
justify-content:center;
z-index:9999;
}
.modal-content{
background:white;
border-radius:1rem;
width:100%;
max-width:400px;
overflow:hidden;
}
.modal-header{
display:flex;
justify-content:space-between;
align-items:center;
padding:1.5rem;
border-bottom:1px solid #e5e7eb;
}
.modal-header h2{
font-size:1.25rem;
font-weight:600;
}
.modal-close{
background:none;
border:none;
font-size:1.5rem;
color:#6b7280;
cursor:pointer;
padding:0.25rem;
}
.wallet-options{
padding:1.5rem;
}
.wallet-option{
display:flex;
align-items:center;
gap:1rem;
padding:1rem;
border:2px solid #e5e7eb;
border-radius:0.75rem;
margin-bottom:1rem;
cursor:pointer;
transition:all 0.3s;
}
.wallet-option:hover{
border-color:#00B894;
background:#00B89410;
}
.wallet-icon{
width:3rem;
height:3rem;
border-radius:50%;
background:#00B89420;
display:flex;
align-items:center;
justify-content:center;
}
.wallet-icon i{
font-size:1.5rem;
color:#00B894;
}
.wallet-info h3{
margin-bottom:0.25rem;
}
.wallet-info p{
color:#6b7280;
font-size:0.875rem;
}
.modal-footer{
padding:1.5rem;
border-top:1px solid #e5e7eb;
text-align:center;
}
.disclaimer{
color:#6b7280;
font-size:0.75rem;
}
</style>
