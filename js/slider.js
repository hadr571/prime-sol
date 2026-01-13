export default class Slider {
    constructor(sliderList, btnRight, btnLeft) {
        this.sliderList = sliderList;
        this.btnRight = btnRight;
        this.btnLeft = btnLeft;
        this.sliderState = 0;
    }

    deactivateBtn(num) {
        if (num === 1) {
            this.btnLeft.classList.add("arrow-button-container__btn--inactive");
        } else {
            this.btnRight.classList.add("arrow-button-container__btn--inactive");
        }
    }

    activateBtn(num) {
        if (num === 1) {
            this.btnLeft.classList.remove("arrow-button-container__btn--inactive");
        } else {
            this.btnRight.classList.remove("arrow-button-container__btn--inactive");
        }
    }

    init() {
        this.deactivateBtn(1);
        this.togglePhotosOnResize();
        window.addEventListener("resize", () => this.togglePhotosOnResize());
        this.btnRight.addEventListener("click", () => this.moveRight());
        this.btnLeft.addEventListener("click", () => this.moveLeft());
    }

    togglePhotosOnResize() {
        const viewportWidth = window.innerWidth;

        if (viewportWidth <= 600) {
            this.removePhotosOnResize();
        } else {
            this.addPhotosOnResize();
        }
    }

    addPhotosOnResize() {
        for (let item of this.sliderList) {
            item.classList.remove("testimonial-box__photo--hidden");
        }
    }

    removePhotosOnResize() {
        for (let i = 0; i < this.sliderList.length; i++) {
            if (i === this.sliderState) {
                continue;
            }
            this.sliderList[i].classList.add("testimonial-box__photo--hidden");
        }
    }

    moveRight() {
        if (this.sliderState === this.sliderList.length - 1) {
            return;
        }

        this.toggleHiddenClass();
        this.sliderState++;
        this.toggleHiddenClass();

        if (this.sliderState === this.sliderList.length - 1) {
            this.deactivateBtn(2);
        } else if (this.sliderState > 0) {
            this.activateBtn(1);
        }
    }

    moveLeft() {
        if (this.sliderState === 0) {
            return;
        }

        this.toggleHiddenClass();
        this.sliderState--;
        this.toggleHiddenClass();

        if (this.sliderState === 0) {
            this.deactivateBtn(1);
        } else if (this.sliderState < this.sliderList.length - 1) {
            this.activateBtn(2);
        }
    }

    toggleHiddenClass() {
        this.sliderList[this.sliderState].classList.toggle("testimonial-box__photo--hidden");
    }
}
