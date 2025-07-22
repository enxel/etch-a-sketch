const container = document.querySelector(".container");
const dim = 16;
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
    e.target.classList.toggle("unhovered-element");
    e.target.classList.toggle("hovered-element");
}

for (let i = 0; i < dim * dim; i++) {
    const div = document.createElement("div");
    div.classList.toggle("grid-element");
    div.classList.toggle("unhovered-element");
    div.addEventListener("mouseenter", hoverChange);
    div.style.width = `${width / dim}px`;
    div.style.height = "100px";
    container.appendChild(div);
}
