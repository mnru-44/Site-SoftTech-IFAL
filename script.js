function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
  
document.querySelector('.Navbar__Link-toggle')
.addEventListener('click', classToggle);

document.querySelector('#home').addEventListener('click', function() {
	window.scrollTo(0, 0)
})

document.querySelector('#programacao').addEventListener('click', function() {
	const elemento = document.querySelector('.programacao').offsetTop;
	window.scrollTo({ top: elemento - 120, behavior: "smooth" });
})

document.querySelector('#competicoes').addEventListener('click', function() {
	const elemento = document.querySelector('#competicoes-frame').offsetTop;
	window.scrollTo({ top: elemento - 120, behavior: "smooth" });
})

document.querySelector('#participantes-nav').addEventListener('click', function() {
	const elemento = document.querySelector('.participantes').offsetTop;
	window.scrollTo({ top: elemento - 120, behavior: "smooth" });
})