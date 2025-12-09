<template>
<div class="discover">
<div class="container">
<h1>Discover Green Projects</h1>
<div class="filters">
<select v-model="selectedCategory"class="filter-select">
<option value="all">All Categories</option>
<option value="solar">Solar</option>
<option value="reforestation">Reforestation</option>
<option value="ocean">Ocean Cleanup</option>
<option value="wind">Wind</option>
</select>
<input v-model="searchQuery"placeholder="Search projects..."class="search-input"/>
<button @click="applyFilters"class="btn btn-primary">Apply Filters</button>
</div>
<div class="projects-grid">
<!-- Projects will be loaded here -->
</div>
</div>
</div>
</template>
<script setup>
import{ref}from'vue'
const selectedCategory=ref('all')
const searchQuery=ref('')
const applyFilters=()=>{
console.log('Filters:',{category:selectedCategory.value,search:searchQuery.value})
}
</script>
