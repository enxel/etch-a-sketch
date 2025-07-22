const container = document.querySelector(".container");
let dim = 16;
const border_width = 1;
let darkening = 0;

window.addEventListener("resize", reestructure);

function setSizes() {
    container.style.width = `${window.innerWidth - 200}px`;
    container.style.height = `${window.innerHeight}px`;
}

function setDims(item) {
    item.style.width = `${100 / dim}%`;
    item.style.height = `${100 / dim}%`;
}

function reestructure() {
    setSizes();

    const divs = Array.from(document.querySelectorAll(".grid-element"));
    divs.forEach(function (item) { setDims(item) } );
}

function hoverChange (e) {
    if (e.target.classList.contains("unhovered-element")) {
        e.target.classList.toggle("unhovered-element");
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        e.target.style.opacity = `${darkening}%`;
        if (darkening < 100){
            darkening += 10;
        }
    }
}

function resizer() {
    let n = getSizeValue();

    if (n !== dim) {
        dim = n;
        darkening = 0;
        
        const divs = Array.from(document.querySelectorAll(".grid-element"));
        divs.forEach(function (item) {item.remove()});

        gridify();
    }
}

function getSizeValue() {
    let answer;

    do {
        answer = parseInt(prompt("Input the new size for the grid: "));
        if (1 <= answer && answer <= 100) {
            break;
        } else if (isNaN(answer)) {
            answer = dim;
            break;
        } else {
            alert("Incorrect value!");
        }
    } while(true);

    return answer;
}

function gridify() {
    setSizes();

    for (let i = 0; i < dim * dim; i++) {
        const div = document.createElement("div");
        div.classList.toggle("grid-element");
        div.classList.toggle("unhovered-element");
        div.addEventListener("mouseenter", hoverChange);

        setDims(div);
        container.appendChild(div);
    }
}

const sizeBtn = document.querySelector("#size");
sizeBtn.addEventListener("click", resizer);

gridify();