/* Variables*/
const btnmenu = document.getElementById("btnmenu");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");
const btndark = document.getElementById("btndark");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");

/* function of the darkMode */
btndark.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
    document.body.classList.contains('dark-mode') ? logo.src="./img/navbar-img/LogoDarkMode.png" : logo.src="./img/navbar-img/Logo.png";
    document.body.classList.contains('dark-mode') ? logo2.src="./img/navbar-img/LogoDarkMode.png" : logo2.src="./img/navbar-img/Logo.png";
});

/* function of the submenu */
btnmenu.addEventListener("click", ()=>{
    btnmenu.classList.toggle("deploy");
    sidebar.classList.toggle("active");
});

/* scroll NavBar Effect */
window.addEventListener("scroll", ()=>{
    const header = document.getElementById("header");
    header.classList.toggle("navback", window.scrollY>0);
});