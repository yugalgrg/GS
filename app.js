let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});

Slideshow
$(document).ready(function () {
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
    });
});

// let form = document.getElementById("my-form");

// var status = document.getElementsByClassName("status");


// async function handleSubmit(event) {
//     event.preventDefault();
//     var status = document.getElementById("status");
//     var data = new FormData(event.target);
//     fetch(event.target.action,{
//         method: form.method,
//         body: data,
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(response => {
//         status.innerHTML = "Thanks for your submission!";
//         form.reset()
//     }).catch(error => {
//         status.innerHTML = "Oops! There was a problem submitting your form"
//     });
// }



