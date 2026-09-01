/* =========================================
   CREOVIX
   Main Website JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     LOGIN
     ========================================= */

  const loginButton = document.querySelector(".login-btn");

  if (loginButton) {

    loginButton.addEventListener("click", function () {

      window.location.href = "login.html";

    });

  }


  /* =========================================
     SMOOTH NAVIGATION
     ========================================= */

  const navigationLinks = document.querySelectorAll(
    'nav a[href^="#"], .hero a[href^="#"]'
  );

  navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =========================================
     CREATION BUTTONS
     ========================================= */

  const creationLinks = document.querySelectorAll(
    ".card .primary-btn"
  );

  creationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      const destination = link.getAttribute("href");

      if (!destination) return;

      console.log(
        "CREOVIX Creator Tool:",
        destination
      );

    });

  });


  /* =========================================
     HERO BUTTON FEEDBACK
     ========================================= */

  const startCreating = document.querySelector(
    '.hero .primary-btn'
  );

  if (startCreating) {

    startCreating.addEventListener("click", function () {

      console.log(
        "CREOVIX: Creator tools opened."
      );

    });

  }


  /* =========================================
     CREOVIX STARTUP MESSAGE
     ========================================= */

  console.log(
    "CREOVIX Creator Platform loaded successfully."
  );

});