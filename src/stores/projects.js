import{defineStore}from'pinia'
import{ref}from'vue'
export const useProjectStore=defineStore('projects',()=>{
const projects=ref([])
const featuredProjects=ref([
{
id:1,
name:'Solar Farm California',
description:'50MW solar farm powering 10,000 homes',
category:{name:'Solar',color:'#FF9F43'},
ecoscore:92,
funding:{current:1250000,goal:2000000,progress:62.5},
impact:{co2Offset:12500},
rewards:{vibeCoins:250}
},
{
id:2,
name:'Amazon Reforestation',
description:'Planting 100,000 trees in the Amazon',
category:{name:'Reforestation',color:'#00B894'},
ecoscore:95,
funding:{current:850000,goal:1000000,progress:85},
impact:{co2Offset:8500},
rewards:{vibeCoins:300}
},
{
id:3,
name:'Ocean Plastic Cleanup',
description:'Removing plastic from the Great Pacific Garbage Patch',
category:{name:'Ocean',color:'#0984E3'},
ecoscore:88,
funding:{current:420000,goal:750000,progress:56},
impact:{co2Offset:4200},
rewards:{vibeCoins:180}
}
])
const getFeaturedProjects=async()=>{
return featuredProjects.value
}
const getProjectById=async(id)=>{
return featuredProjects.value.find(p=>p.id===id)
}
return{
projects,
featuredProjects,
getFeaturedProjects,
getProjectById
}
})
