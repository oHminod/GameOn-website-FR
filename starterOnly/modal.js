function editNav() {
    const topNav = document.getElementById("myTopnav");
    const navIcon = document.getElementById("navIcon");
    if (topNav.className === "topnav") {
        topNav.className += " responsive";
        navIcon.className = "fa fa-times";
    } else {
        topNav.className = "topnav";
        navIcon.className = "fa fa-bars";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("form");
// Inputs Wrappers Elements
const firstNameWrapper = document.getElementById("firstNameWrapper");
const lastNameWrapper = document.getElementById("lastNameWrapper");
const emailWrapper = document.getElementById("emailWrapper");
const birthdateWrapper = document.getElementById("birthdateWrapper");
const quantityWrapper = document.getElementById("quantityWrapper");
const locationWrapper = document.getElementById("locationWrapper");
const termsWrapper = document.getElementById("termsWrapper");
// Inputs Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementsByName("location1");
const location2 = document.getElementsByName("location2");
const location3 = document.getElementsByName("location3");
const location4 = document.getElementsByName("location4");
const location5 = document.getElementsByName("location5");
const location6 = document.getElementsByName("location6");
const terms = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

function validate(e) {
    e.preventDefault();
    if (true) {
        form.innerHTML = "";
        form.classList.add("success");
        const text = document.createElement("p");
        text.innerHTML = "Merci pour votre inscription.";
        form.appendChild(text);
        const closeButtonWrapper = document.createElement("div");
        closeButtonWrapper.classList.add("close-button-wrapper");
        form.appendChild(closeButtonWrapper);
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "Fermer";
        closeButton.classList.add("btn-submit");
        closeButton.addEventListener("click", closeModal);
        closeButtonWrapper.appendChild(closeButton);
    }
}
