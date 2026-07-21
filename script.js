/*=========================================================
RAJIB MAJUMDAR
OFFICIAL WEBSITE
VERSION 11
script.js
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
      MOBILE MENU
    =====================================================*/

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

            menuToggle.classList.toggle("active");

        });

    }

    /*=====================================================
      SMOOTH SCROLL
    =====================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

            if (navbar) {

                navbar.classList.remove("active");

            }

        });

    });

    /*=====================================================
      ACTIVE MENU
    =====================================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

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

    /*=====================================================
      HEADER SHADOW
    =====================================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        }

        else {

            header.classList.remove("scrolled");

        }

    });

    /*=====================================================
      FADE ANIMATION
    =====================================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(

        ".song-card, .gallery-card, .video-card, .contact-card, .stat"

    ).forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

});