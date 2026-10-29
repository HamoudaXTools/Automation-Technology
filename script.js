const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];$('#year').textContent=new Date().getFullYear();const menu=$('#menuToggle'),nav=$('#mainNav');menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))});$$('nav a').forEach(a=>a.addEventListener('click',()=>{ $$('nav a').forEach(n=>n.classList.remove('active'));a.classList.add('active');nav.classList.remove('open')}));let lang='ar';$('#langToggle').addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';$$('[data-ar][data-en]').forEach(el=>el.textContent=el.dataset[lang]);$('#langToggle').innerHTML=lang==='ar'?'<span class="selected">AR</span><span>EN</span>':'<span>AR</span><span class="selected">EN</span>';$('#searchInput').placeholder=lang==='ar'?'ابحث في الموقع':'Search the site';if(themeText)themeText.textContent=document.documentElement.getAttribute('data-theme')==='light'?(lang==='ar'?'دارك مود':'Dark mode'):(lang==='ar'?'وايت مود':'Light mode')});$('#searchToggle').addEventListener('click',()=>{const f=$('#searchForm');f.classList.toggle('open');if(f.classList.contains('open'))$('#searchInput').focus()});$('#searchForm').addEventListener('submit',e=>{e.preventDefault();const q=$('#searchInput').value.trim().toLowerCase();const card=$$('.card').find(c=>c.textContent.toLowerCase().includes(q));if(card){card.scrollIntoView({behavior:'smooth',block:'center'});card.style.boxShadow='0 0 30px #21d9ff';setTimeout(()=>card.style.boxShadow='',1800)}else $('#searchInput').placeholder=lang==='ar'?'لا توجد نتيجة، جرّب كلمة أخرى':'No results, try another term'});


// Working light / dark mode for the existing site markup.
const themeButton = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeText = document.querySelector("#themeText");

function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  const light = mode === "light";
  if (themeIcon) { themeIcon.src = light ? "assets/icons/moon.svg" : "assets/icons/sun.svg"; themeIcon.alt = light ? "Switch to dark mode" : "Switch to light mode"; }
  if (themeText) themeText.textContent = light ? (lang === "ar" ? "دارك مود" : "Dark mode") : (lang === "ar" ? "وايت مود" : "Light mode");
  if (themeButton) {
    themeButton.setAttribute("aria-label", light ? "التبديل إلى الدارك مود" : "التبديل إلى الوايت مود");
    themeButton.title = light ? "Switch to dark mode" : "Switch to light mode";
  }
  try { localStorage.setItem("automation-technology-theme", mode); } catch (e) {}
}
let initialTheme = "dark";
try { initialTheme = localStorage.getItem("automation-technology-theme") || "dark"; } catch (e) {}
setTheme(initialTheme);
if (themeButton) themeButton.addEventListener("click", () => {
  setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
});
