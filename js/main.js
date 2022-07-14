

/* scroll NavBar Effect */
window.addEventListener("scroll", ()=>{
    const header = document.getElementById("header")
    header.classList.toggle("navback", window.scrollY>0)
})
console.log(scrollY);