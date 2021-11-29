import {Effect} from "./effect.mjs";

class Link {
    constructor() {
    };
    addLink(title) {
        document.getElementById("dockContainer").innerHTML += `
            
                <a class="linkContainer" href="https://${title}.com">
                    <div class="text">${title}</div>
                </a>
            
        `

        new Effect().effect();
    };
}

export {Link};