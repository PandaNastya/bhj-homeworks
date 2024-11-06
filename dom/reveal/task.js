window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    let scroll = window.scrollY;
    
    reveals.forEach((reveal) => {
        reveal.classList.remove("reveal_active")
        const {top} = reveal.getBoundingClientRect();
        if (top < scroll) {
            reveal.classList.add("reveal_active");
        }
    })
})