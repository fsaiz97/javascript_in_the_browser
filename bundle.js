(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{}]},{},[1]);
