function editNav() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("navIcon");
    if (x.className === "topnav") {
        x.className += " responsive";
        y.className = "fa fa-times";
    } else {
        x.className = "topnav";
        y.className = "fa fa-bars";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

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
