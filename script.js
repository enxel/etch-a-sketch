const container = document.querySelector(".container");
let dim = 16;
const border_width = 2;
let width = window.innerWidth - dim * border_width * 2;

window.addEventListener("resize", reestructure);

function reestructure() {
    // console.log(window.innerWidth);
    width = window.innerWidth - dim * border_width * 2;
    const divs = Array.from(document.querySelectorAll(".grid-element"));
    divs.forEach(function (item) {item.style.width = `${width / dim}px`});
}

function hoverChange (e) {
    if (e.target.classList.contains("unhovered-element")) {
        e.target.classList.toggle("unhovered-element");
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    }
}

function resizer() {
    dim = getSizeValue();

    const divs = Array.from(document.querySelectorAll(".grid-element"));
    divs.forEach(function (item) {item.remove()});

    gridify();
}

function getSizeValue() {
    let answer;

    do {
        answer = parseInt(prompt("Input the new size for the grid: "));
        if (1 <= answer && answer <= 100) {
            break;
        } else {
            alert("Incorrect value!");
        }
    } while(true);

    return answer;
}

function gridify() {
    for (let i = 0; i < dim * dim; i++) {
        const div = document.createElement("div");
        div.classList.toggle("grid-element");
        div.classList.toggle("unhovered-element");
        div.addEventListener("mouseenter", hoverChange);
        div.style.width = `${width / dim}px`;
        div.style.height = "100px";
        container.appendChild(div);
    }
}

const sizeBtn = document.querySelector("#size");
sizeBtn.addEventListener("click", resizer);

gridify();