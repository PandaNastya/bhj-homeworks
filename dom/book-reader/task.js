const fontSizeElements = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book");

fontSizeElements.forEach((fontSize) => {
    fontSize.addEventListener("click", (event) => {
        event.preventDefault();
        fontSizeElements.forEach(fontSize => fontSize.classList.remove("font-size_active"));
        event.target.classList.add("font-size_active");
        const fontIndex = fontSizeElements.indexOf(event.target);
        book.className = "book";
        if (fontIndex === 0) {
            book.classList.add("book_fs-small");
        } else if (fontIndex === fontSizeElements.length - 1) {
            book.classList.add("book_fs-big");
        }
    })
})