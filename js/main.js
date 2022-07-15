
/* function of the submenu */
const btnmenu = document.getElementById("btnmenu")
const sidebar = document.getElementById("sidebar")
const menu = document.getElementById("menu")

btnmenu.addEventListener("click", ()=>{
    btnmenu.classList.toggle("deploy")
    sidebar.classList.toggle("active")
})


/* scroll NavBar Effect */
window.addEventListener("scroll", ()=>{
    const header = document.getElementById("header")
    header.classList.toggle("navback", window.scrollY>0)
})