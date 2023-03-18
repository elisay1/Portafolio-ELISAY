var typed = new Typed(".input", {

    strings: ["Desarrollo Web", "Creación de contenido", "Implementación de LMS", "Implementación de CMS", 
    "Soporte Técnico"],
    typeSpeed:65,
    backSpeed: 55,
    loop:true
})
//display en el topvar on mall screen size
let menuicon=document.querySelector(".menu-icon");
let navbar=document.querySelector(".navbar");
let icon=document.querySelector(".menu-icon i");

menuicon.addEventListener("click", function(){
    navbar.classList.toggle("open");
    if(icon.classList.contains("bx bx-menu"))
    {
        icon.classList.remove("bx bx-menu");
        icon.classList.add("bx bx-menu-alt-right")
    }
    else{
        icon.classList.remove("bx bx-menu");
        icon.classList.add("bx bx-menu-alt-right")
    }
})