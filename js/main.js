import Carousel from "./carousel.js";
import Slider from "./slider.js";
import Nav from "./nav.js";
import Faq from "./faq.js";
import * as utils from "./utils.js";

// Check if testimonial-box exists
if (document.querySelector(".testimonial-box") && !document.querySelector(".testimonial-box--no-carousel")) {
    const sliderlList = document.querySelectorAll(".testimonial-box__photo");
    const btnRight = document.querySelector("#slider-btn-right");
    const btnLeft = document.querySelector("#slider-btn-left");

    const sliderObj = new Slider(sliderlList, btnRight, btnLeft);
    sliderObj.init();
}

// Check if carousel exists
if (document.querySelector(".carousel")) {
    // Carousel A
    if (document.querySelector("#carousel-a")) {
        const carouselA = document.querySelector("#carousel-a");
        const carouselListA = document.querySelector("#carousel-list-a");
        const btnRightCarouselA = document.querySelector("#carousel-btn-right-a");
        const btnLeftCarouselA = document.querySelector("#carousel-btn-left-a");

        const carouselObjA = new Carousel(carouselA, carouselListA, btnRightCarouselA, btnLeftCarouselA);
        carouselObjA.init();
    }
    // Carousel B
    if (document.querySelector("#carousel-b")) {
        const carouselB = document.querySelector("#carousel-b");
        const carouselListB = document.querySelector("#carousel-list-b");
        const btnRightCarouselB = document.querySelector("#carousel-btn-right-b");
        const btnLeftCarouselB = document.querySelector("#carousel-btn-left-b");

        const carouselObjB = new Carousel(carouselB, carouselListB, btnRightCarouselB, btnLeftCarouselB);
        carouselObjB.init();
    }
    // Carousel C
    if (document.querySelector("#carousel-c")) {
        const carouselC = document.querySelector("#carousel-c");
        const carouselListC = document.querySelector("#carousel-list-c");
        const btnRightCarouselC = document.querySelector("#carousel-btn-right-c");
        const btnLeftCarouselC = document.querySelector("#carousel-btn-left-c");

        const carouselObjC = new Carousel(carouselC, carouselListC, btnRightCarouselC, btnLeftCarouselC);
        carouselObjC.init();
    }
}

// Check if carousel exists
if (document.querySelector(".nav__list")) {
    const navObj = new Nav();
    navObj.init();
}

if (document.querySelector(".faq")) {
    const faq = document.querySelector(".faq");
    const faqObj = new Faq(faq);
    faqObj.init();
}

utils.checkWindowSizeOnLoad();

// function containing event listener for the window resize event
utils.checkWindowSizeEvent();

// check if button block exists
if (document.querySelector(".btn-block")) {
    utils.checkForWindowScroll();
}

//Change the year in copy right text to current year
const footerYearDetailed = document.querySelector(".footer-container-detailed__copy-right");
const footerYear = document.querySelector(".footer-container__text--with-year");
const currentYear = new Date().getFullYear();

if (footerYearDetailed) {
    footerYearDetailed.innerHTML = `&copy; ${currentYear} Stoppers. All rights reserved.`;
}
if (footerYear) {
    footerYear.innerHTML = `&copy; ${currentYear} Stoppers`;
}
