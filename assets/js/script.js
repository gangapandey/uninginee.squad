'use strict';

// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.lenth; i < len; i++) {
        elements[i].addEventListner(eventType, callback);
    }
}



// Mobile Navbar
// navbar will show  after clicking menu button

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNav);

const navClose = () => {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElements(navLinks, "click", navClose);




/*
* Header and back to top btn
* header and back to top btn will be active after scrolled down to 100px of screen
*/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-top-btn]");

const activeEl = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }
    else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll", activeEl);


/**
 * Button hover ripple effect
 */

const buttons = document.querySelectorAll("[data-btn]");

const buttonHoverRipple = function (event) {
    this.style.setProperty("--top", `${event.offsetY}px`);
    this.style.setProperty("--left", `${event.offsetX}px`);
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple);


/* 
* Scroll reveal
*/

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
        const isElementInsideWindow = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1;

        if (isElementInsideWindow) {
            revealElements[i].classList.add("revealed");
        }
    }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);