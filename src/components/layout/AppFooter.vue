<template>
<footer class="app-footer">
<div class="container">
<div class="footer-content">
<div class="footer-section">
<h3 class="footer-logo">
<i class="bi bi-tree-fill"></i>
VerdeChain
</h3>
<p class="footer-tagline">
Transparent sustainability. Verified impact.
</p>
<div class="social-links">
<a href="#"class="social-link">
<i class="bi bi-twitter"></i>
</a>
<a href="#"class="social-link">
<i class="bi bi-discord"></i>
</a>
<a href="#"class="social-link">
<i class="bi bi-github"></i>
</a>
<a href="#"class="social-link">
<i class="bi bi-linkedin"></i>
</a>
</div>
</div>
<div class="footer-section">
<h4>Product</h4>
<router-link to="/discover"class="footer-link">Discover</router-link>
<router-link to="/portfolio"class="footer-link">Portfolio</router-link>
<router-link to="/rewards"class="footer-link">Rewards</router-link>
<router-link to="/verification"class="footer-link">For Companies</router-link>
</div>
<div class="footer-section">
<h4>Resources</h4>
<a href="#"class="footer-link">Documentation</a>
<a href="#"class="footer-link">Blog</a>
<a href="#"class="footer-link">Research</a>
<a href="#"class="footer-link">Support</a>
</div>
<div class="footer-section">
<h4>Legal</h4>
<a href="#"class="footer-link">Privacy Policy</a>
<a href="#"class="footer-link">Terms of Service</a>
<a href="#"class="footer-link">Cookie Policy</a>
<a href="#"class="footer-link">Disclaimer</a>
</div>
</div>
<div class="footer-bottom">
<p>&copy; 2024 VerdeChain. All rights reserved.</p>
<p class="disclaimer">
VerdeChain is a technology platform. Investments involve risk. This is not financial advice.
</p>
</div>
</div>
</footer>
</template>
<style scoped>
.app-footer{
background:#2D3436;
color:white;
padding:3rem 0 2rem;
margin-top:auto;
}
.container{
max-width:1280px;
margin:0 auto;
padding:0 1.5rem;
}
.footer-content{
display:grid;
grid-template-columns:2fr 1fr 1fr 1fr;
gap:3rem;
margin-bottom:3rem;
}
.footer-logo{
display:flex;
align-items:center;
gap:0.5rem;
font-size:1.5rem;
color:#00B894;
margin-bottom:1rem;
}
.footer-tagline{
color:#9ca3af;
margin-bottom:1.5rem;
}
.social-links{
display:flex;
gap:1rem;
}
.social-link{
width:2.5rem;
height:2.5rem;
border-radius:50%;
background:rgba(255,255,255,0.1);
display:flex;
align-items:center;
justify-content:center;
color:white;
text-decoration:none;
transition:background 0.3s;
}
.social-link:hover{
background:#00B894;
}
.footer-section h4{
margin-bottom:1rem;
color:white;
}
.footer-link{
display:block;
color:#9ca3af;
text-decoration:none;
margin-bottom:0.5rem;
transition:color 0.3s;
}
.footer-link:hover{
color:#00B894;
}
.footer-bottom{
border-top:1px solid rgba(255,255,255,0.1);
padding-top:2rem;
text-align:center;
}
.disclaimer{
font-size:0.75rem;
color:#9ca3af;
margin-top:0.5rem;
max-width:600px;
margin-left:auto;
margin-right:auto;
}
</style>
