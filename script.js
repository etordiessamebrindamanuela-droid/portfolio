// =======================================
// PORTFOLIO - ETORDI ESSAME BRINDA MANUELA
// =======================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MODE SOMBRE
    // ==========================

    const themeButton = document.getElementById("theme-toggle");

    if(themeButton){

        // Restaurer le thème sauvegardé
        if(localStorage.getItem("theme") === "dark"){

            document.body.classList.add("dark-mode");

            const icon = themeButton.querySelector("i");

            if(icon){
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

        }

        themeButton.addEventListener("click", ()=>{

            document.body.classList.toggle("dark-mode");

            const icon = themeButton.querySelector("i");

            if(document.body.classList.contains("dark-mode")){

                localStorage.setItem("theme","dark");

                if(icon){
                    icon.classList.remove("fa-moon");
                    icon.classList.add("fa-sun");
                }

            }else{

                localStorage.setItem("theme","light");

                if(icon){
                    icon.classList.remove("fa-sun");
                    icon.classList.add("fa-moon");
                }

            }

        });

    }

    // ==========================
    // APPARITION DES SECTIONS
    // ==========================

    const sections=document.querySelectorAll("section");

    sections.forEach(section=>{

        section.classList.add("hidden");

    });

    const observer=new IntersectionObserver((entries)=>{

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

    // ==========================
// ANIMATION DES BARRES
// ==========================

const bars = document.querySelectorAll(".progress-bar");

const observerBars = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const bar = entry.target;

            bar.style.width = bar.dataset.width;

            observerBars.unobserve(bar);

        }

    });

},{
    threshold:0.5
});

bars.forEach(bar => {

    bar.style.width = "0";

    observerBars.observe(bar);

});
    // ==========================
    // EFFET MACHINE À ÉCRIRE
    // ==========================

    const titre=document.getElementById("typing");

    if(titre){

        const texte="ETORDI ESSAME BRINDA MANUELA";

        let i=0;

        function ecrire(){

            if(i<texte.length){

                titre.innerHTML+=texte.charAt(i);

                i++;

                setTimeout(ecrire,80);

            }

        }

        ecrire();

    }

});


// ==========================
// LOADER
// ==========================

const loader = document.getElementById("loader");

if(loader){

    window.addEventListener("load", ()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    });

    // Sécurité : masque le loader après 3 secondes maximum
    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    },3000);

}