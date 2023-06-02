"use strict"

const button = document.getElementById("changeImageBtn");

button.addEventListener("click", myFunction);

function myFunction(){
    const heroImage = document.getElementById("heroImage");
    heroImage.src = "./images/oakbaybridge.jpg";
}