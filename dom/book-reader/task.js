const fontSizeElements = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book");

fontSizeElements.forEach((fontSize) => {
    fontSize.addEventListener("click", (event) => {
        event.preventDefault();
        fontSizeElements.forEach(fontSize => fontSize.classList.remove("font-size_active"));
        event.target.classList.add("font-size_active");
        
        book.classList.remove('book_fs-small', 'book_fs-big');
        const size = event.target.dataset.size;
        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    })
})