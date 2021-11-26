class Dock {
    constructor() {
    };
    create() {
        let dockContainer = document.createElement("div");
        dockContainer.id = "dockContainer";
        document.body.appendChild(dockContainer);
        dockContainer.className = "bottom";
    };
}

export {Dock};