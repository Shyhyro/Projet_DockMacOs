class Effect {
    constructor() {
    };

    effect() {
        let links = document.querySelectorAll(".linkContainer");
        for (let i=0; i<links.length; i++){

            links[i].addEventListener("mouseover", function () {
                links[i].style.transform = "scale(1.5)";
                links[i].style.margin = "25px";

                if(links[i].previousElementSibling) {
                    links[i].previousElementSibling.style.transform = "scale(1.3)";
                    links[i].previousElementSibling.style.margin = "20px";

                    if(links[i].previousElementSibling.previousElementSibling) {
                        links[i].previousElementSibling.previousElementSibling.style.transform = "scale(1.15)";
                        links[i].previousElementSibling.previousElementSibling.style.margin = "15px";
                    }
                }

                if(links[i].nextElementSibling) {
                    links[i].nextElementSibling.style.transform = "scale(1.3)";
                    links[i].nextElementSibling.style.margin = "20px";

                    if(links[i].nextElementSibling.nextElementSibling) {
                        links[i].nextElementSibling.nextElementSibling.style.transform = "scale(1.15)";
                        links[i].nextElementSibling.nextElementSibling.style.margin = "15px";
                    }
                }
            });
            links[i].addEventListener("mouseout", function () {
                links[i].style.transform = "scale(1)";
                links[i].style.margin = "5px";

                if(links[i].previousElementSibling) {
                    links[i].previousElementSibling.style.transform = "scale(1)";
                    links[i].previousElementSibling.style.margin = "5px";

                    if(links[i].previousElementSibling.previousElementSibling) {
                        links[i].previousElementSibling.previousElementSibling.style.transform = "scale(1)";
                        links[i].previousElementSibling.previousElementSibling.style.margin = "5px";
                    }
                }
                if (links[i].nextElementSibling) {
                    links[i].nextElementSibling.style.transform = "scale(1)";
                    links[i].nextElementSibling.style.margin = "5px";

                    if(links[i].nextElementSibling.nextElementSibling) {
                        links[i].nextElementSibling.nextElementSibling.style.transform = "scale(1)";
                        links[i].nextElementSibling.nextElementSibling.style.margin = "5px";
                    }
                }
            });
        }
    };
}

export {Effect};