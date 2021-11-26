class Effect {
    constructor() {
    };

    effect() {
        let links = document.querySelectorAll(".linkContainer");
        for (let i=0; i<links.length; i++){
            let avant = i-1;
            let apres = i+1;

            links[i].addEventListener("mouseover", function () {
                links[avant].classList.add("autre");
                links[apres].classList.add("autre");
            });
            links[i].addEventListener("mouseout", function () {
                links[avant].classList.remove("autre");
                links[apres].classList.remove("autre");
            });
        }
    };
}

export {Effect};