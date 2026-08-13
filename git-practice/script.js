const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "You just changed the website using JavaScript!";
});