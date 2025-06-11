import "./styles.css";
import { displayContent } from "./content.js";
import { displayMenu } from "./menu.js";
import { displayAbout } from "./about.js";


const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => { 
  displayContent();
});

const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener("click", () => { 
  displayMenu();
});

const aboutBtn = document.querySelector("#about");
aboutBtn.addEventListener("click", () => { 
  displayAbout();
});