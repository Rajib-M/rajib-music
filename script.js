/* ===========================================================
   Rajib Majumdar Official Website
   script.js
   Version 5.0
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
       Smooth Scroll Navigation
    =========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({
                    behavior:"smooth",
                    block:"start"
                });

            }

        });

    });

    /* ===========================================
       Sticky Header Shadow
    =========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 50){

            header.classList.add("header-shadow");

        }else{

            header.classList.remove("header-shadow");

        }

    });

    /* ===========================================
       Fade In Sections
    =========================================== */

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    sections.forEach(section=>{

        section.classList.add("hidden");

        observer.observe(section);

    });

    /* ===========================================
       Active Navigation
    =========================================== */

    const navLinks=document.querySelectorAll("nav a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            if(window.scrollY>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

    /* ===========================================
       Scroll To Top Button
    =========================================== */

    const topButton=document.createElement("button");

    topButton.innerHTML="↑";

    topButton.id="scrollTop";

    document.body.appendChild(topButton);

    topButton.style.display="none";

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            topButton.style.display="block";

        }else{

            topButton.style.display="none";

        }

    });

    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});