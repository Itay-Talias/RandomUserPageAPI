const userPageApi = new ControllerModule();

userPageApi.addOnClicksToButtons();

function myFunction() {
    console.log("hii");
    const popup = document.getElementById("myPopup") as HTMLInputElement;
    popup.classList.toggle("show");
}
