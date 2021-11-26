import {Link} from "./link.mjs";

class Position {
    constructor() {
    };

    panel() {
        document.body.innerHTML += `
            <div id="panel">
                <button id="top">Top</button>
                <button id="left">Left</button>
                <button id="bottom">Bottom</button>
                <button id="right">Right</button>
                <button id="add">+</button>
            </div>
        `
    };

    position() {
        let dock = document.getElementById("dockContainer");

        document.getElementById('top').addEventListener('click', function () {
            dock.className = "top";
        });
        document.getElementById('left').addEventListener('click', function () {
            dock.className = "left";
        });
        document.getElementById('bottom').addEventListener('click', function () {
            dock.className = "bottom";
        });
        document.getElementById('right').addEventListener('click', function () {
            dock.className = "right";
        });
        document.getElementById("add").addEventListener('click', function () {
            new Link().addLink();
        })
    };
}

export {Position};