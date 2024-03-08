"use strict";

const parentDiv = document.createElement("div");
parentDiv.setAttribute("id", "parentDiv");

const form = document.createElement("form");
form.setAttribute("id", "myForm");

const textDiv = document.createElement("div");
textDiv.setAttribute("id", "text");

const h1 = document.createElement("h1");
h1.textContent = "Create account";

const h3 = document.createElement("h3");
h3.textContent = "We always keep your name and email address private";

const inputUsername = document.createElement("input");
inputUsername.setAttribute("type", "text");
inputUsername.setAttribute("placeholder", "Username");
inputUsername.setAttribute("autocomplete", "username");

const inputDisplayName = document.createElement("input");
inputDisplayName.setAttribute("type", "text");
inputDisplayName.setAttribute("placeholder", "Display name");

const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "Email");
inputEmail.setAttribute("autocomplete", "email");

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

const subLabelBuyer = document.createElement("label");
subLabelBuyer.textContent = "I'm looking for stuff as a buyer";
subLabelBuyer.style.display = "block";

const inputJoinSeller = document.createElement("input");
inputJoinSeller.setAttribute("type", "radio");
inputJoinSeller.setAttribute("name", "role");
inputJoinSeller.setAttribute("value", "seller");

const labelSeller = document.createElement("label");
labelSeller.textContent = "Join as a Creative or Marketplace seller";

const subLabelSeller = document.createElement("label");
subLabelSeller.textContent =
  "I'm a seller who wants to sell creative or marketplace items";
subLabelSeller.style.display = "block";

const inputAgree = document.createElement("input");
inputAgree.setAttribute("type", "checkbox");
inputAgree.setAttribute("id", "agree");

const labelAgree = document.createElement("label");
labelAgree.textContent = "I agree to the terms and conditions";

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";

textDiv.appendChild(h1);
textDiv.appendChild(h3);

form.appendChild(inputUsername);
form.appendChild(inputDisplayName);
form.appendChild(inputEmail);
form.appendChild(inputPassword);
form.appendChild(inputPasswordConfirmation);
form.appendChild(inputJoinBuyer);
form.appendChild(labelBuyer);
labelBuyer.appendChild(subLabelBuyer);
form.appendChild(inputJoinSeller);
form.appendChild(labelSeller);
labelSeller.appendChild(subLabelSeller);
form.appendChild(inputAgree);
form.appendChild(labelAgree);
form.appendChild(submitButton);

parentDiv.appendChild(textDiv);
parentDiv.appendChild(form);

document.body.appendChild(parentDiv);
