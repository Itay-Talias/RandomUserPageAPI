"use strict";
const userPageApi = new ControllerModule();
userPageApi.addOnClicksToButtons();
function myFunction() {
    console.log("hii");
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
