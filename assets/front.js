import "./css/front.css";
import {Dock} from "./js/dock.mjs";
import {Link} from "./js/link.mjs";
import {Effect} from "./js/effect.mjs";
import {Position} from "./js/position";

new Dock().create();

new Position().panel();
new Position().position();

new Link().addLink("Link1");
new Link().addLink("Link2");
new Link().addLink("Link3");
new Link().addLink("Link4");
new Link().addLink("Link5");

new Effect().effect();