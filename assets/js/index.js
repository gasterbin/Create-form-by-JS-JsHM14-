"use strict";

class Person {
  constructor(username, displayName, nickname, email, password) {
    this.username = username;
    this.displayName = displayName;
    this.nickname = nickname;
    this.email = email;
    this.password = password;
  }
}

const parentDiv = document.createElement("div");
parentDiv.setAttribute("id", "parentDiv");

const form = document.createElement("form");
form.setAttribute("id", "myForm");

const textDiv = document.createElement("div");
textDiv.setAttribute("id", "text");

const h1 = document.createElement("h1");
h1.textContent = "Create Account";

const h3 = document.createElement("h3");
h3.textContent = "We always keep your name and email address private";

const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");

const inputUsername = document.createElement("input");
inputUsername.setAttribute("type", "text");
inputUsername.setAttribute("placeholder", "Username");
inputUsername.setAttribute("autocomplete", "username");

const inputDisplayName = document.createElement("input");
inputDisplayName.setAttribute("type", "text");
inputDisplayName.setAttribute("placeholder", "Display name");

const inputNickname = document.createElement("input");
inputNickname.setAttribute("type", "text");
inputNickname.setAttribute("placeholder", "Nickname");

const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "Email");
inputEmail.addEventListener("input", validateEmail);

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Password");
inputPassword.setAttribute("autocomplete", "new-password");

const inputPasswordConfirmation = document.createElement("input");
inputPasswordConfirmation.setAttribute("type", "password");
inputPasswordConfirmation.setAttribute("placeholder", "Confirm Password");
inputPasswordConfirmation.setAttribute("autocomplete", "new-password");

const inputJoinBuyer = document.createElement("input");
inputJoinBuyer.setAttribute("type", "radio");
inputJoinBuyer.setAttribute("name", "role");
inputJoinBuyer.setAttribute("value", "buyer");

const labelBuyer = document.createElement("label");
labelBuyer.textContent = "Join as a Buyer";
labelBuyer.classList.add("label-buyer");

const subLabelBuyer = document.createElement("label");
subLabelBuyer.textContent = "I'm looking for stuff as a buyer";
subLabelBuyer.style.display = "block";
subLabelBuyer.classList.add("sub-label-buyer");

const inputJoinSeller = document.createElement("input");
inputJoinSeller.setAttribute("type", "radio");
inputJoinSeller.setAttribute("name", "role");
inputJoinSeller.setAttribute("value", "seller");

const labelSeller = document.createElement("label");
labelSeller.textContent = "Join as a Creative or Marketplace seller";
labelSeller.classList.add("label-seller");

const subLabelSeller = document.createElement("label");
subLabelSeller.textContent =
  "I'm a seller who wants to sell creative or marketplace items";
subLabelSeller.style.display = "block";
subLabelSeller.classList.add("sub-label-seller");

const inputAgree = document.createElement("input");
inputAgree.setAttribute("type", "checkbox");
inputAgree.setAttribute("id", "agree");

const labelAgree = document.createElement("label");
labelAgree.textContent = "I agree to the terms and conditions";
labelAgree.classList.add("label-agree");

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Create account";

const cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel";
cancelButton.setAttribute("type", "button");
cancelButton.classList.add("cancel-button");

const errorElement = document.createElement("div");
errorElement.setAttribute("id", "email-error");
errorElement.style.display = "none";
errorElement.style.color = "red";

textDiv.appendChild(h1);
textDiv.appendChild(h3);

inputContainer.appendChild(inputUsername);
inputContainer.appendChild(inputDisplayName);
inputContainer.appendChild(inputNickname);
inputContainer.appendChild(inputEmail);
inputContainer.appendChild(inputPassword);
inputContainer.appendChild(inputPasswordConfirmation);

form.appendChild(inputContainer);
form.appendChild(inputJoinBuyer);
form.appendChild(labelBuyer);
labelBuyer.appendChild(subLabelBuyer);
form.appendChild(inputJoinSeller);
form.appendChild(labelSeller);
labelSeller.appendChild(subLabelSeller);
form.appendChild(inputAgree);
form.appendChild(labelAgree);
form.appendChild(submitButton);
form.appendChild(cancelButton);

parentDiv.appendChild(textDiv);
parentDiv.appendChild(form);
parentDiv.appendChild(errorElement);

document.body.appendChild(parentDiv);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = inputUsername.value;
  const displayName = inputDisplayName.value;
  const nickname = inputNickname.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  const person = new Person(username, displayName, nickname, email, password);

  const personJSON = JSON.stringify(person);

  localStorage.setItem(person.username, personJSON);

  inputUsername.value = "";
  inputDisplayName.value = "";
  inputNickname.value = "";
  inputEmail.value = "";
  inputPassword.value = "";
  inputPasswordConfirmation.value = "";

});

function validateEmail() {
  const emailInput = document.querySelector('input[type="email"]'); 
  const emailValue = emailInput.value; 

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    errorElement.textContent = 'Invalid email format'; 
    errorElement.style.display = 'block'; 
    emailInput.classList.add('error-border'); 
  } else {
    errorElement.textContent = ''; 
    errorElement.style.display = 'none'; 
    emailInput.classList.remove('error-border'); 
  }
}
