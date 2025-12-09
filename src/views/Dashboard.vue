<template>
<div class="dashboard">
<div class="container">
<!-- Hero Stats -->
<div class="hero-stats">
<div class="stat-card">
<div class="stat-value">${{formatNumber(userPortfolio.totalValue)}}</div>
<div class="stat-label">Portfolio Value</div>
</div>
<div class="stat-card">
<div class="stat-value">{{formatNumber(userPortfolio.impact.co2Offset)}}</div>
<div class="stat-label">Tons CO₂ Offset</div>
</div>
<div class="stat-card">
<div class="stat-value">{{formatNumber(userPortfolio.vibeCoins)}}</div>
<div class="stat-label">Vibe Coins</div>
</div>
<div class="stat-card">
<div class="stat-value">{{userPortfolio.activeProjects}}</div>
<div class="stat-label">Active Projects</div>
</div>
</div>
<!-- Featured Projects -->
<div class="section-header">
<h2>Featured Green Projects</h2>
<router-link to="/discover"class="btn-link">View All</router-link>
</div>
<div class="projects-grid">
<div v-for="project in featuredProjects":key="project.id"class="project-card">
<div class="project-header">
<span class="project-badge":style="{background:project.category.color}">
{{project.category.name}}
</span>
<span class="ecoscore-badge">
<i class="bi bi-shield-check"></i>
{{project.ecoscore}}
</span>
</div>
<div class="project-content">
<h3>{{project.name}}</h3>
<p>{{project.description}}</p>
<div class="project-metrics">
<div class="metric">
<div class="metric-value">${{formatNumber(project.funding.current)}}</div>
<div class="metric-label">Funded</div>
</div>
<div class="metric">
<div class="metric-value">{{project.impact.co2Offset}}t</div>
<div class="metric-label">CO₂ Reduction</div>
</div>
<div class="metric">
<div class="metric-value">{{project.rewards.vibeCoins}}</div>
<div class="metric-label">Vibe Coins</div>
</div>
</div>
<div class="project-progress">
<div class="progress-bar">
<div class="progress-fill":style="{width:project.funding.progress+'%'}"></div>
</div>
<div class="progress-text">
<span>{{project.funding.progress}}% funded</span>
<span>${{formatNumber(project.funding.goal)}} goal</span>
</div>
</div>
</div>
<div class="project-actions">
<button class="btn btn-primary"@click="invest(project)">
<i class="bi bi-coin"></i>
Invest Now
</button>
<button class="btn btn-outline"@click="viewDetails(project)">
View Details
</button>
</div>
</div>
</div>
<!-- Impact Tracker -->
<div class="impact-tracker">
<h2>Your Impact Journey</h2>
<div class="impact-visualization">
<div class="impact-metric">
<div class="impact-icon">
<i class="bi bi-tree-fill"></i>
</div>
<div class="impact-value">{{formatNumber(userImpact.trees)}}</div>
<div class="impact-label">Trees Equivalent</div>
</div>
<div class="impact-metric">
<div class="impact-icon">
<i class="bi bi-cloud-sun"></i>
</div>
<div class="impact-value">{{formatNumber(userImpact.co2Offset)}}t</div>
<div class="impact-label">CO₂ Offset</div>
</div>
<div class="impact-metric">
<div class="impact-icon">
<i class="bi bi-droplet-fill"></i>
</div>
<div class="impact-value">{{formatNumber(userImpact.waterSaved)}}L</div>
<div class="impact-label">Water Saved</div>
</div>
<div class="impact-metric">
<div class="impact-icon">
<i class="bi bi-lightning-charge-fill"></i>
</div>
<div class="impact-value">{{formatNumber(userImpact.energyGenerated)}}kWh</div>
<div class="impact-label">Clean Energy</div>
</div>
</div>
</div>
</div>
</div>
</template>
<script setup>
import{ref,onMounted}from'vue'
import{useProjectStore}from'@/stores/projects'
import{useAuthStore}from'@/stores/auth'
import{formatNumber}from'@/utils/formatters'
const projectStore=useProjectStore()
const authStore=useAuthStore()
const featuredProjects=ref([])
const userPortfolio=ref({
totalValue:0,
impact:{co2Offset:0},
vibeCoins:0,
activeProjects:0
})
const userImpact=ref({
trees:83,
co2Offset:12.4,
waterSaved:15000,
energyGenerated:8500
})
onMounted(async()=>{
await loadData()
})
const loadData=async()=>{
featuredProjects.value=await projectStore.getFeaturedProjects()
userPortfolio.value=await authStore.getPortfolio()
}
const invest=(project)=>{
// Open investment modal
console.log('Invest in:',project)
}
const viewDetails=(project)=>{
// Navigate to project details
}
</script>
<style scoped>
.dashboard{padding:2rem 0;}
.container{max-width:1280px;margin:0 auto;padding:0 1.5rem;}
.hero-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;margin-bottom:3rem;}
.stat-card{background:white;border-radius:1rem;padding:1.5rem;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);}
.stat-value{font-size:2rem;font-weight:700;color:#00B894;margin-bottom:0.5rem;}
.stat-label{color:#6b7280;font-size:0.875rem;}
.section-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;}
.btn-link{color:#00B894;text-decoration:none;font-weight:500;}
.projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-bottom:3rem;}
.project-card{background:white;border-radius:1rem;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);}
.project-header{display:flex;justify-content:space-between;padding:1rem 1.5rem;background:#f9fafb;}
.project-badge{color:white;padding:0.25rem 0.75rem;border-radius:1rem;font-size:0.75rem;font-weight:600;}
.ecoscore-badge{background:#00CEC9;color:white;padding:0.25rem 0.75rem;border-radius:1rem;font-size:0.75rem;display:flex;align-items:center;gap:0.25rem;}
.project-content{padding:1.5rem;}
.project-content h3{margin-bottom:0.5rem;}
.project-content p{color:#6b7280;margin-bottom:1.5rem;font-size:0.875rem;}
.project-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:1.5rem;}
.metric-value{font-weight:600;color:#00B894;}
.metric-label{font-size:0.75rem;color:#6b7280;}
.project-progress{margin-bottom:1.5rem;}
.progress-bar{height:0.5rem;background:#e5e7eb;border-radius:1rem;overflow:hidden;}
.progress-fill{height:100%;background:linear-gradient(90deg,#00B894,#00CEC9);}
.progress-text{display:flex;justify-content:space-between;margin-top:0.5rem;font-size:0.875rem;}
.project-actions{display:flex;gap:0.5rem;padding:0 1.5rem 1.5rem;}
.impact-tracker{margin-top:3rem;padding:2rem;background:linear-gradient(135deg,#00B89420,#00CEC920);border-radius:1rem;}
.impact-visualization{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;margin-top:2rem;}
.impact-metric{text-align:center;}
.impact-icon{width:3rem;height:3rem;background:white;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;}
.impact-icon i{font-size:1.5rem;color:#00B894;}
.impact-value{font-size:1.5rem;font-weight:700;color:#00B894;}
.impact-label{color:#6b7280;font-size:0.875rem;}
</style>
