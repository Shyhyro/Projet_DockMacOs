import {Effect} from "./effect.mjs";
import "../images/github.png";
import "../images/google.png";

class Link {
    constructor() {
    };
    addLink(title, image) {
        document.getElementById("dockContainer").innerHTML += `
            
                <a class="linkContainer" href="https://${title}.com">
                    <img src="/build/images/${image}" alt="Icon">
                    <div class="text">${title}</div>
                </a>
        `
        new Effect().effect();
    };
}

export {Link};