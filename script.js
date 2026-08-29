// J Extra Creator Hub

document.addEventListener("DOMContentLoaded", function () {

  const loginButton = document.querySelector(".login-btn");

  loginButton.addEventListener("click", function () {
    alert("Login feature coming soon!");
  });

  const createButtons = document.querySelectorAll(".card button");

  createButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const card = button.closest(".card");
      const title = card.querySelector("h3").textContent;

      alert("You selected: " + title);
    });

  });

});