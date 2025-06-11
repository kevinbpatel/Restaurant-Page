export const displayAbout = () => { 
  const content = document.querySelector("#content");

  const contactUs =  document.createElement("h2");
  contactUs.textContent = "Contact Us";
  const phone = document.createElement("div");
  const address = document.createElement("div");
  const email = document.createElement("div");

  phone.textContent = "123-456-7890";
  address.textContent = "main street 123";
  email.textContent = "theGoat@gmail.com"

  content.replaceChildren();
  content.appendChild(contactUs);
  content.appendChild(phone);
  content.appendChild(address);
  content.appendChild(email);
}
