<template>
<div v-if="notifications.length"class="notification-center">
<div v-for="notification in notifications":key="notification.id"
:class="['notification',notification.type]">
<div class="notification-content">
<i :class="iconMap[notification.type]"></i>
<span>{{notification.message}}</span>
</div>
<button @click="removeNotification(notification.id)"class="notification-close">
<i class="bi bi-x"></i>
</button>
</div>
</div>
</template>
<script setup>
import{ref}from'vue'
const notifications=ref([
{id:1,type:'success',message:'Connected to wallet successfully!'},
{id:2,type:'info',message:'New solar project available for investment'},
{id:3,type:'reward',message:'+50 Vibe Coins earned for your impact'}
])
const iconMap={
success:'bi bi-check-circle',
info:'bi bi-info-circle',
reward:'bi bi-coin',
warning:'bi bi-exclamation-triangle',
error:'bi bi-x-circle'
}
const removeNotification=(id)=>{
notifications.value=notifications.value.filter(n=>n.id!==id)
}
</script>
<style scoped>
.notification-center{
position:fixed;
top:1rem;
right:1rem;
z-index:9999;
display:flex;
flex-direction:column;
gap:0.5rem;
}
.notification{
background:white;
border-radius:0.5rem;
padding:1rem;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);
min-width:300px;
}
.notification.success{
border-left:4px solid #00B894;
}
.notification.info{
border-left:4px solid #00CEC9;
}
.notification.reward{
border-left:4px solid #FF9F43;
}
.notification-content{
display:flex;
align-items:center;
gap:0.75rem;
}
.notification-content i{
font-size:1.25rem;
}
.notification.success .notification-content i{color:#00B894;}
.notification.info .notification-content i{color:#00CEC9;}
.notification.reward .notification-content i{color:#FF9F43;}
.notification-close{
background:none;
border:none;
color:#9ca3af;
cursor:pointer;
padding:0.25rem;
}
.notification-close:hover{
color:#374151;
}
</style>
