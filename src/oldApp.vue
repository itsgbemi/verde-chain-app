<template>
<div id="app">
<AppHeader/>
<div class="main-content">
<RouterView/>
</div>
<AppFooter/>
<NotificationCenter/>
<ConnectWalletModal v-if="showWalletModal"/>
</div>
</template>
<script setup>
import{ref}from'vue'
import AppHeader from'@/components/layout/AppHeader.vue'
import AppFooter from'@/components/layout/AppFooter.vue'
import NotificationCenter from'@/components/common/NotificationCenter.vue'
import ConnectWalletModal from'@/components/wallet/ConnectWalletModal.vue'
const showWalletModal=ref(false)
</script>
<style scoped>
.main-content{
min-height:calc(100vh - 120px);
}
</style>
