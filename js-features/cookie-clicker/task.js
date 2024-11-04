const clickElement = document.getElementById("cookie");
const status = document.getElementById("clicker__counter");
let count = 0;
clickElement.addEventListener("click", () => {
    count ++;
    document.getElementById("clicker__counter").textContent = count;
})

clickElement.addEventListener("mousedown", () => {
    clickElement.style.width = "220px";
})

clickElement.addEventListener("mouseup", () => {
    clickElement.style.width = "";
})