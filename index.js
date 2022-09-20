console.log("Hello from index.js");

let heading = document.getElementById("heading");
heading.textContent = "Hello";

let listItems = document.querySelectorAll("ul>li");
console.log("listItems Length =", listItems.length);
listItems.forEach(element => element.style.color = "red");

let deleteButtons = document.getElementsByClassName("delete-btn");
for (button of deleteButtons) {
    button.textContent = "z"
}

let listElements = document.getElementsByTagName("li");
for (element of listElements) {
    element.style.color = "purple";
}
