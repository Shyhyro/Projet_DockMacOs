import {Effect} from "./effect.mjs";

class Link {
    constructor() {
    };
    addLink(title) {
        document.getElementById("dockContainer").innerHTML += `
            <a href="#">
                <div class="linkContainer">
                    <div class="text">${title}</div>
                </div>
            </a>
        `

        new Effect().effect();
    };
}

export {Link};