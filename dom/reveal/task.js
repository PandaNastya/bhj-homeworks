window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((reveal) => {
        reveal.classList.remove("reveal_active");
        const {top} = reveal.getBoundingClientRect();
        if (top < window.innerHeight) {
            reveal.classList.add("reveal_active");
        }
    })
})