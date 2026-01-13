function moveImageContainerWithWindowSize() {
    const descriptionBoxes = document.querySelectorAll(".description-box--change-position");
    const imageContainers = document.querySelectorAll(".image-container--change-position");
    const viewportWidth = window.innerWidth;

    if (viewportWidth <= 900) {
        for (let i = 0; i < descriptionBoxes.length; i++) {
            const item = descriptionBoxes[i];
            item.children[0].after(imageContainers[i]);
        }
    } else {
        for (let i = 0; i < descriptionBoxes.length; i++) {
            const item = descriptionBoxes[i];
            item.after(imageContainers[i]);
        }
    }
}

function checkForFooterVisibility() {
    const btnBlock = document.querySelector(".btn-block");
    const footer = document.querySelector(".footer");

    const windowSizeFooterTop = footer.getBoundingClientRect().top;
    const btnBlockHeight = btnBlock.offsetHeight;
    const windowHeight = window.innerHeight;

    if (windowSizeFooterTop <= windowHeight) {
        console.log("hell");
        // Fix the button to the top of the footer
        btnBlock.style.position = "absolute";
        btnBlock.style.top = "0";
        btnBlock.style.transform = `translateY(-${btnBlockHeight}px)`;
    } else {
        // Keep the button fixed at the bottom of the viewport
        btnBlock.style.position = "fixed";
        btnBlock.style.top = "auto";
        btnBlock.style.transform = `translateY(0)`;
    }
}

export function checkWindowSizeOnLoad() {
    moveImageContainerWithWindowSize();
}

export function checkWindowSizeEvent() {
    window.addEventListener("resize", moveImageContainerWithWindowSize);
}

export function checkForWindowScroll() {
    window.addEventListener("scroll", checkForFooterVisibility);
}
