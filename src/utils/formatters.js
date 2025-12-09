export const formatNumber=(num)=>{
if(num>=1000000){
return(num/1000000).toFixed(1)+'M'
}
if(num>=1000){
return(num/1000).toFixed(1)+'K'
}
return num.toLocaleString()
}
export const shortAddress=(address)=>{
if(!address)return''
return address.substring(0,6)+'...'+address.substring(address.length-4)
}
export const formatCurrency=(amount)=>{
return new Intl.NumberFormat('en-US',{
style:'currency',
currency:'USD',
minimumFractionDigits:0
}).format(amount)
}
export const formatDate=(date)=>{
return new Date(date).toLocaleDateString('en-US',{
year:'numeric',
month:'short',
day:'numeric'
})
}
