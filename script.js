// Creovix

document.addEventListener("DOMContentLoaded", function () {

  const loginButton = document.querySelector(".login-btn");

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      alert("Login feature coming soon!");
    });
  }

  const createButtons = document.querySelectorAll(".card button");

  createButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const card = button.closest(".card");

      if (!card) return;

      const title = card.querySelector("h3");

      if (!title) return;

      alert("You selected: " + title.textContent);

    });

  });

});