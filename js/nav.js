export default class Nav {
    constructor() {
        this.nav = document.querySelector(".nav");
        this.navList = document.querySelector(".nav__list");
        this.navFiller = document.querySelector(".nav__filler");
        this.navBtn = document.querySelector(".nav__burger-btn");
        this.navBtnSticks = document.querySelectorAll(".nav__burger-stick");
        this.body = document.querySelector("body");
        this.navDisplayed = false;
    }

    init() {
        this.navBtn.addEventListener("click", () => this.toggleDisplay());
    }

    changeNavBtnShape() {
        this.navBtnSticks[0].classList.toggle("nav__burger-stick--change-shape-up");
        this.navBtnSticks[1].classList.toggle("nav__burger-stick--hide-middle");
        this.navBtnSticks[2].classList.toggle("nav__burger-stick--change-shape-down");
    }

    toggleDisplay() {
        this.navDisplayed = !this.navDisplayed;

        if (this.navDisplayed) {
            this.navFiller.classList.add("nav__filler--respond");
            this.navList.classList.add("nav__list--display-on-click");
            this.changeNavBtnShape();
            this.body.style.overflow = "hidden";
        } else {
            this.navFiller.classList.remove("nav__filler--respond");
            this.navList.classList.remove("nav__list--display-on-click");
            this.changeNavBtnShape();
            this.body.style.overflow = "visible";
        }
    }
}
