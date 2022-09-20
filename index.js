let addButton = document.getElementById('add-item');
let groceriesList = document.getElementById('food-list');
let heading = document.getElementById("heading");

heading.style.backgroundColor = "green";

// addButton.onclick = () => console.log("Click")
// addButton.addEventListener('click', () => console.log("Click"));

addButton.addEventListener("click", () => {
    document.getElementById('item-1').textContent = "Task 1 is performed";
})

addButton.addEventListener("click", () => {
    document.getElementById('item-2').textContent = "Task 2 is performed";
})

addButton.addEventListener("click", () => {
    let newItem = document.createElement("li");
    let listSpan = document.createElement("span");
    newItem.id = "item-4";
    newItem.textContent = "banana";
    listSpan.className = "delete-btn";
    listSpan.textContent = 'x';
    groceriesList.append(newItem);
    newItem.append(listSpan);
})

heading.addEventListener("mouseenter", () => heading.style.backgroundColor = "red")

heading.addEventListener("mouseleave", () => heading.style.backgroundColor = "green")

