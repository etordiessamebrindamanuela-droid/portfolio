// ==============================
// APPARITION DES SECTIONS
// ==============================

const elements = document.querySelectorAll(
".about, .skills, .projects, .timeline, .certifications, .vision, .contact"
);

elements.forEach(el=>{
    el.classList.add("hidden");
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

elements.forEach(el=>{
    observer.observe(el);
});


// ==============================
// ANIMATION DES BARRES
// ==============================

const bars = document.querySelectorAll(".progress-bar");

bars.forEach(bar=>{

    const width = bar.style.width;

    bar.style.width="0";

    setTimeout(()=>{
        bar.style.width=width;
    },500);

});


// ==============================
// EFFET MACHINE À ÉCRIRE
// ==============================

const titre=document.querySelector(".hero-text h1");

const texte=titre.textContent;

titre.textContent="";

let i=0;

function ecrire(){

    if(i<texte.length){

        titre.textContent+=texte.charAt(i);

        i++;

        setTimeout(ecrire,80);

    }

}

window.onload=ecrire;