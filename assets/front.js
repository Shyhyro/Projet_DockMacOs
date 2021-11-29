import "./css/front.css";
import {Dock} from "./js/dock.mjs";
import {Link} from "./js/link.mjs";
import {Effect} from "./js/effect.mjs";
import {Position} from "./js/position";


new Dock().create();

new Position().panel();
new Position().position();

new Link().addLink("Github");
new Link().addLink("Google");
new Link().addLink("Github");
new Link().addLink("Google");
new Link().addLink("Github");
new Link().addLink("Google");

new Effect().effect();