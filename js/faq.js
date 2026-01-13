export default class Faq {
    constructor(faq) {
        this.faq = faq;
        this.faqList = Array.from(faq.children);
    }

    init() {
        this.faqList.forEach((item) => {
            item.addEventListener("click", (e) => {
                const answer = item.querySelector(".faq__answer");
                const header = item.querySelector(".faq__header");
                const icon = item.querySelector(".faq__icon");

                answer.classList.toggle("faq__answer--visible");
                header.classList.toggle("faq__header--add-margin");
                icon.classList.toggle("faq__icon--rotate");

                if (answer.classList.contains("faq__answer--visible")) {
                    answer.style.height = `${answer.scrollHeight}px`;
                } else {
                    answer.style.height = "0";
                }
            });
        });
    }
}
