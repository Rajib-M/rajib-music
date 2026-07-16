/* ==========================================
   RAJIB MAJUMDAR
   WEBSITE SCRIPT
   Version 1.0
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       Smooth Scrolling
    ========================================== */

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });


    /* ==========================================
       Header Scroll Effect
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* ==========================================
       Active Navigation
    ========================================== */

    const sections = document.querySelectorAll("section");

    const menuLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        menuLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });


    /* ==========================================
       Fade In Animation
    ========================================== */

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(".section").forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });


    /* ==========================================
       Image Hover Effect
    ========================================== */

    const images = document.querySelectorAll("img");

    images.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transition = "0.4s";

        });

    });


    /* ==========================================
       Back To Top Button
    ========================================== */

    const topButton = document.getElementById("backToTop");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                topButton.style.display = "block";

            } else {

                topButton.style.display = "none";

            }

        });

        topButton.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});


/* ==========================================
   Console Message
========================================== */

console.log("Rajib Majumdar Website Loaded Successfully");

/* ==========================================
   End of File
========================================== */
