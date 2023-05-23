console.log("hi");

let button = document.querySelector(".button");
let container = document.querySelector(".container");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    container.classList.toggle("dark");

    themeName.innerText = container.classList.contains("dark") ? " - jasny" : " - ciemny";
});