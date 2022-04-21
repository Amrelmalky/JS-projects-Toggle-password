//! Selectors

let myInput = document.getElementById("pass-input");
let myButton = document.querySelector(".btn");

//! events

myButton.addEventListener("click", toggleinputType);

//! logic
function toggleinputType() {
  {
    if (this.getAttribute("data-text") === "show") {
      myInput.setAttribute("type", "text");
      this.setAttribute("data-text", "hidden");
      this.textContent = "hidden";
    } else if (myButton.getAttribute("data-text") === "hidden") {
      myInput.setAttribute("type", "password");
      this.setAttribute("data-text", "show");
      this.textContent = "show";
    }
  }
}
