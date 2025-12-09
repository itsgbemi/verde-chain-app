import{defineStore}from'pinia'
import{ref}from'vue'
export const useAuthStore=defineStore('auth',()=>{
const user=ref(null)
const isAuthenticated=ref(false)
const connectWallet=async()=>{
try{
// Mock wallet connection
user.value={
walletAddress:'0x742d35Cc6634C0532925a3b844Bc9e',
avatar:'https://api.dicebear.com/7.x/avataaars/svg?seed=verdechain',
vibeCoins:3420,
portfolioValue:4820
}
isAuthenticated.value=true
}catch(error){
console.error('Wallet connection failed:',error)
}
}
const disconnectWallet=()=>{
user.value=null
isAuthenticated.value=false
}
const getPortfolio=async()=>{
return{
totalValue:4820,
impact:{co2Offset:12.4},
vibeCoins:3420,
activeProjects:3
}
}
return{
user,
isAuthenticated,
connectWallet,
disconnectWallet,
getPortfolio
}
})
