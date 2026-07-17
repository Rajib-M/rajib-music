/* ==========================================================
   Rajib Majumdar Website
   script.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Smooth Scroll Navigation
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

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
       Back To Top Button
    ========================================== */

    const topBtn = document.getElementById("topBtn");

    function handleScroll() {

        if (!topBtn) return;

        if (window.scrollY > 400) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    }

    window.addEventListener("scroll", handleScroll);

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }


    /* ==========================================
       Fade-in Animation
    ========================================== */

    const fadeItems = document.querySelectorAll(".fade-up");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {
            threshold: 0.15
        });

        fadeItems.forEach(item => observer.observe(item));

    } else {

        fadeItems.forEach(item => item.classList.add("show"));

    }


    /* ==========================================
       Sticky Header
    ========================================== */

    const header = document.querySelector("header");

    function stickyHeader() {

        if (!header) return;

        if (window.scrollY > 60) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    }

    window.addEventListener("scroll", stickyHeader);

});