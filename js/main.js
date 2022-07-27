/* Variables*/
const btnmenu = document.getElementById("btnmenu");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");
const btndark = document.getElementById("btndark");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");
const cardTemplate = document.getElementById("templateCard").content
const fragment = document.createDocumentFragment()

/* DOM objects loaded */
document.addEventListener("DOMContentLoaded", ()=>{
    dataFetch()
})

/* fetch */
const dataFetch = async()=>{
    try {
        /* API */
        const res = await fetch('api.json');
        const data = await res.json();
        createCard(data);
    } catch (e) {
        console.log(e);
    }
}

/* create card product */
const createCard = data =>{
    data.forEach(prod => {
        cardTemplate.querySelector('.coursesImg').setAttribute("src", prod.img);
        cardTemplate.querySelector('.coursesTextCategory').textContent = prod.category;
        cardTemplate.querySelector('.coursesTituleH2').textContent = prod.name;
        cardTemplate.querySelector('.coursesText').textContent = `$ `+ prod.price;
        cardTemplate.querySelector('.coursesTextClock').innerHTML = `<i class="fa-solid fa-clock"></i> ` + prod.hours;
        cardTemplate.querySelector('.coursesTextVideo').innerHTML = `<i class="fa-solid fa-video"></i> ` + prod.video;
        cardTemplate.querySelector('.btnbuy').dataset.id = prod.id;
        const clone = cardTemplate.cloneNode(true);
        fragment.appendChild(clone);
    });
    card.appendChild(fragment)

}

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