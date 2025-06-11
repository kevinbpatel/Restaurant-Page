export const displayMenu = () => { 
  const content = document.querySelector("#content");

  content.replaceChildren();

  const cardContainer = document.createElement("div");

  const itemOne = document.createElement("div");
  const titleOne = document.createElement("h4");
  const descriptOne = document.createElement("h5");
  titleOne.textContent = "Lean Mean Scramble";
  descriptOne.textContent = "Scrambled egg whites with spinach, bell peppers, and lean turkey sausage. Served with a side of sweet potato hash.";
  itemOne.appendChild(titleOne);
  itemOne.appendChild(descriptOne);
  cardContainer.appendChild(itemOne);

  const itemTwo = document.createElement("div");
  const titleTwo = document.createElement("h4");
  const descriptTwo = document.createElement("h5");
  titleTwo.textContent = "Powerhouse Chicken Bowl";
  descriptTwo.textContent = "Grilled chicken breast slices over a bed of quinoa, with roasted broccoli, cherry tomatoes, and a light lemon-herb vinaigrette.";
  itemTwo.appendChild(titleTwo);
  itemTwo.appendChild(descriptTwo);
  cardContainer.appendChild(itemTwo);

  const itemThree = document.createElement("div");
  const titleThree = document.createElement("h4");
  const descriptThree = document.createElement("h5");
  titleThree.textContent = "Muscle Up Salmon Salad";
  descriptThree.textContent = "Flaked baked salmon atop mixed greens with cucumber, red onion, and a sprinkle of walnuts. Drizzled with an apple cider vinaigrette.";
  itemThree.appendChild(titleThree);
  itemThree.appendChild(descriptThree);
  cardContainer.appendChild(itemThree);

  
  itemOne.classList.add("card");
  itemTwo.classList.add("card");
  itemThree.classList.add("card");

  content.appendChild(cardContainer);

}
