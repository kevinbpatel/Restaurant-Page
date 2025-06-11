import chickenBreast from "./how-to-grill-chicken-breast-pic.jpg"


export const displayContent = () => { 
  const content = document.querySelector("#content");

  const img = document.createElement("img");

  img.src = chickenBreast;
  img.width = 500;

  const tagLine =  document.createElement("h2");
  const description = document.createElement("div");
  tagLine.textContent = "Delicious Food stays within your calories and macros.";
  description.textContent = "KP's Gym Food is a game-changer for anyone who loves delicious meals but wants to stay on track with their fitness goals. Every dish is crafted with care, balancing flavor and nutrition so you never have to choose between eating well and enjoying your food. Whether you're fueling up before a workout or winding down after a long day, KP's Gym Food offers high-quality ingredients, perfectly portioned meals, and a menu designed to keep you within your calories and macros. It's not just food—it's fuel for your best self!";

  content.appendChild(img);
  content.appendChild(tagLine);
  content.appendChild(description);
}
