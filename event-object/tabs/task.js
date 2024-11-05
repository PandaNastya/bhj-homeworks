const tabs = document.querySelectorAll(".tab");
const contentElements = document.querySelectorAll(".tab__content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        for(let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("tab_active");
            contentElements[i].classList.remove("tab__content_active");
        }
        tab.classList.add("tab_active");
        contentElements[index].classList.add("tab__content_active");
    })
})