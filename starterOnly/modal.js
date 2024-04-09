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
        form.style.height = "70vh";
    }
}
