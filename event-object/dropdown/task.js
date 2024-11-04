const valueElement = document.querySelector(".dropdown__value");
const items = document.querySelectorAll(".dropdown__item")
const list = document.querySelector(".dropdown__list");

valueElement.addEventListener("click", () => {
    list.classList.toggle("dropdown__list_active");
})

items.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        list.classList.remove("dropdown__list_active");
        valueElement.textContent = item.textContent.trim();
    })
})