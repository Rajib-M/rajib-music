/* ===================================================
   RAJIB MAJUMDAR OFFICIAL WEBSITE
   MASTER SCRIPT.JS
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Smooth Navigation
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* ===========================
       Header Shadow on Scroll
    =========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";

        }

    });


    /* ===========================
       Fade Animation
    =========================== */

    const animatedItems = document.querySelectorAll(
        ".music-card, .video-card, .gallery-item, .journey-card, .contact-card, .release-card, .about-grid"
    );

    animatedItems.forEach(item => {
        item.classList.add("fade-up");
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    animatedItems.forEach(item => observer.observe(item));


    /* ===========================
       Active Navigation
    =========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});


/* ===========================
   Copyright Year
=========================== */

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Rajib Majumdar. All Rights Reserved.`;

}
