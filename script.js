// ==========================
// MODE SOMBRE
// ==========================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeButton.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});
// ==============================
// Apparition progressive des sections
// ==============================

const sections = document.querySelectorAll("section");

sections.forEach(section=>{
    section.classList.add("hidden");
});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    observer.observe(section);

});
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },600);

    },1000);

});