let addButton = document.getElementById('add-item');
let groceriesList = document.getElementById('food-list');

// addButton.onclick = () => console.log("Click")
// addButton.addEventListener('click', () => console.log("Click"));

// addButton.addEventListener("click", () => {
//     document.getElementById('item-1').textContent = "Task 1";
// })

// addButton.addEventListener("click", () => {
//     document.getElementById('item-2').textContent = "Task 2";
// })

addButton.addEventListener("click", () => {
    let newItem = document.createElement("li");
    let listSpan = document.createElement("span");
    newItem.id = "item-4";
    newItem.textContent = "banana";
    listSpan.className = "delete-btn";
    listSpan.textContent = 'x';
    groceriesList.append(newItem);
    listItem.append(listSpan);
})

let heading = document.getElementById("heading");
heading.addEventListener("mouseenter", () => {
    heading.style.backgroundColor = "red";
})

heading.addEventListener("mouseleave", () => {
    heading.style.backgroundColor = "green";
})

