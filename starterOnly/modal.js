// Toggle dropdown menu
function toggleNav() {
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
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const terms = document.getElementById("checkbox1");

const searchParams = new URLSearchParams(window.location.search);

function init() {
    const firstP = searchParams.get("first");
    const lastP = searchParams.get("last");
    const emailP = searchParams.get("email");
    const birthdateP = searchParams.get("birthdate");
    const quantityP = searchParams.get("quantity");
    const cityP = searchParams.get("city");
    const termsP = searchParams.get("terms");

    if (firstP) {
        firstName.value = firstP;
    }
    if (lastP) {
        lastName.value = lastP;
    }
    if (emailP) {
        email.value = emailP;
    }
    if (birthdateP) {
        birthdate.value = birthdateP;
    }
    if (quantityP) {
        quantity.value = quantityP;
    } else {
        quantity.value = 0;
    }

    if (cityP) {
        switch (cityP) {
            case "NY":
                location1.checked = true;
                break;
            case "SF":
                location2.checked = true;
                break;
            case "Seattle":
                location3.checked = true;
                break;
            case "Chicago":
                location4.checked = true;
                break;
            case "Boston":
                location5.checked = true;
                break;
            case "Portland":
                location6.checked = true;
                break;
        }
    }

    if (termsP) {
        if (termsP === "true") terms.checked = true;
        if (termsP === "false") terms.checked = false;
    } else {
        terms.checked = true;
    }
}

init();

// Launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.addEventListener("click", closeModal);

// Launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
    modalbg.style.display = "none";
}
function closeModalAfterSuccess() {
    modalbg.style.display = "none";
    window.location.reload();
}

// Inputs validation events
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
birthdate.addEventListener("change", validateBirthdate);
quantity.addEventListener("input", validateQuantity);
location1.addEventListener("change", validateLocation);
location2.addEventListener("change", validateLocation);
location3.addEventListener("change", validateLocation);
location4.addEventListener("change", validateLocation);
location5.addEventListener("change", validateLocation);
location6.addEventListener("change", validateLocation);
terms.addEventListener("change", validateTerms);

// Regex for input validation
const nameRegex = /^[a-zA-Z]{2,}([a-zA-Z]*[' -]?[a-zA-Z]+)*$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const birthdateRegex =
    /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
const quantityRegex = /^(?!$)\d+$/;

// Inputs validation
function validateFirstName() {
    const existingError = firstNameWrapper.querySelector(".error");
    if (existingError) {
        existingError.remove();
    }

    searchParams.set("first", firstName.value);
    history.pushState(null, "", "?" + searchParams.toString());

    if (!nameRegex.test(firstName.value)) {
        firstName.style.border = "2px solid red";
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerText =
            "Veuillez entrer un prénom valide. (Au moins deux caractères)";
        firstNameWrapper.appendChild(error);
        return false;
    } else {
        firstName.style.border = "2px solid transparent";
        return true;
    }
}

function validateLastName() {
    const existingError = lastNameWrapper.querySelector(".error");
    if (existingError) {
        existingError.remove();
    }

    searchParams.set("last", lastName.value);
    history.pushState(null, "", "?" + searchParams.toString());

    if (!nameRegex.test(lastName.value)) {
        lastName.style.border = "2px solid red";
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerText =
            "Veuillez entrer un nom valide. (Au moins deux caractères)";
        lastNameWrapper.appendChild(error);
        return false;
    } else {
        lastName.style.border = "2px solid transparent";
        return true;
    }
}

function validateEmail() {
    const existingError = emailWrapper.querySelector(".error");
    if (existingError) {
        existingError.remove();
    }

    searchParams.set("email", email.value);
    history.pushState(null, "", "?" + searchParams.toString());

    if (!emailRegex.test(email.value)) {
        email.style.border = "2px solid red";
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerText = "Veuillez entrer une adresse email valide.";
        emailWrapper.appendChild(error);
        return false;
    } else {
        email.style.border = "2px solid transparent";
        return true;
    }
}

function validateBirthdate() {
    const existingError = birthdateWrapper.querySelector(".error");
    if (existingError) {
        existingError.remove();
    }

    searchParams.set("birthdate", birthdate.value);
    history.pushState(null, "", "?" + searchParams.toString());

    if (!birthdateRegex.test(birthdate.value)) {
        birthdate.style.border = "2px solid red";
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerText = "Veuillez entrer une date de naissance valide.";
        birthdateWrapper.appendChild(error);
        return false;
    } else {
        birthdate.style.border = "2px solid transparent";
        return true;
    }
}

function validateQuantity() {
    const existingError = quantityWrapper.querySelector(".error");
    if (existingError) {
        existingError.remove();
    }

    searchParams.set("quantity", quantity.value);
    history.pushState(null, "", "?" + searchParams.toString());

    if (!quantityRegex.test(quantity.value)) {
        quantity.style.border = "2px solid red";
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerText = "Veuillez entrer un nombre valide.";
        quantityWrapper.appendChild(error);
        return false;
    } else {
        quantity.style.border = "2px solid transparent";
        return true;
    }
}

function validateLocation() {
    const checkedLocations = [
        location1.checked,
        location2.checked,
        location3.checked,
        location4.checked,
        location5.checked,
        location6.checked,
    ];
    const onlyOneLocationIsChecked =
        checkedLocations.filter((location) => location).length === 1;

    const existingError = locationWrapper.querySelector(".error");
    if (existingError) {
        existingError.remove();
    }

    if (!onlyOneLocationIsChecked) {
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerText = "Veuillez choisir une ville.";
        locationWrapper.appendChild(error);
        return false;
    } else {
        const city = ["NY", "SF", "Seattle", "Chicago", "Boston", "Portland"][
            checkedLocations.indexOf(true)
        ];
        searchParams.set("city", city);
        history.pushState(null, "", "?" + searchParams.toString());
        return true;
    }
}

function validateTerms() {
    const checkedTerms = terms.checked;

    const existingError = termsWrapper.querySelector(".error");
    if (existingError) {
        existingError.remove();
    }

    searchParams.set("terms", checkedTerms.toString());
    history.pushState(null, "", "?" + searchParams.toString());

    if (!checkedTerms) {
        const error = document.createElement("p");
        error.classList.add("error");
        error.innerText = "Veuillez accepter les conditions d'utilisation.";
        termsWrapper.appendChild(error);
        return false;
    } else {
        return true;
    }
}

// Form validation
function validate(e) {
    e.preventDefault();
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isBirthdateValid = validateBirthdate();
    const isQuantityValid = validateQuantity();
    const isLocationValid = validateLocation();
    const isTermsValid = validateTerms();

    if (
        isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isBirthdateValid &&
        isQuantityValid &&
        isLocationValid &&
        isTermsValid
    ) {
        form.innerHTML = "";
        form.classList.add("success");
        const successText = document.createElement("p");
        successText.innerText = "Merci pour votre inscription.";
        form.appendChild(successText);
        const closeButtonWrapper = document.createElement("div");
        closeButtonWrapper.classList.add("close-button-wrapper");
        form.appendChild(closeButtonWrapper);
        const closeButton = document.createElement("button");
        closeButton.innerText = "Fermer";
        closeButton.classList.add("btn-submit");
        closeButton.addEventListener("click", closeModalAfterSuccess);
        closeButtonWrapper.appendChild(closeButton);
    }
}
