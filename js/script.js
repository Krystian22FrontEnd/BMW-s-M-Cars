{

    const welcome = () => {
        console.log("hi");
    }



    const toggleBackground = () => {
        const container = document.querySelector(".container");
        const themeName = document.querySelector(".themeName");
        
        container.classList.toggle("dark");
        themeName.innerText = container.classList.contains("dark") ? " - jasny" : " - ciemny";
        
    };



    const init = () => {
        const button = document.querySelector(".button");


        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
};