const timerElement = document.getElementById("timer");
let time = 59;
const timer = setInterval(() => {
    timerElement.textContent = time;
    if (time > 0) {
        time = time - 1;
    } else {
        clearInterval(timer);
        alert("Вы победили в конкурсе");
    }
}, 1000);
