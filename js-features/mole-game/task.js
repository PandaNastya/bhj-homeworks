const holeElement = document.querySelectorAll(".hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let hit = 0;
let miss = 0;

holeElement.forEach((hole) => {
    hole.addEventListener("click", (e) =>{
        if (e.target.classList.contains("hole_has-mole")) {
            dead.textContent = ++hit;
        } else {
            lost.textContent = ++miss;
        }
        if (hit === 10) {
            endGame("Победа!");
        }
        if (miss === 5) {
            endGame("Вы проиграли!");
        }
    })
})

function endGame(message) {
    alert(message);
    hit = 0;
    miss = 0;
    dead.textContent = hit;
    lost.textContent = miss;
}
