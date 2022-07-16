/* Variables*/
const btnmenu = document.getElementById("btnmenu")
const sidebar = document.getElementById("sidebar")
const menu = document.getElementById("menu")
const btndark = document.getElementById("btndark")

/* function of the darkMode */
btndark.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
})

/* function of the submenu */
btnmenu.addEventListener("click", ()=>{
    btnmenu.classList.toggle("deploy")
    sidebar.classList.toggle("active")
})

/* scroll NavBar Effect */
window.addEventListener("scroll", ()=>{
    const header = document.getElementById("header")
    header.classList.toggle("navback", window.scrollY>0)
})