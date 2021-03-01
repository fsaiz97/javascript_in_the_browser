# JavaScript in the Browser _(120 mins)_

## Objectives
_These objectives are crafted using [Bloom's Taxonomy](https://tips.uark.edu/using-blooms-taxonomy/) \
Please refer to [this action verb list](https://tips.uark.edu/blooms-taxonomy-verb-chart/) when adding or updating objectives_
- Use JavaScript to manipulate the DOM
- Write tests for DOM manipulation
- Use external libraries

## The DOM _(5 mins)_
:question: **What does DOM stand for** \
**A**: Document Object Model
- [ ] :speaking_head: Tell students that the DOM is an abstraction, merely a representation of the HTML file received from the server
- [ ] :computer: Show students how you can update the DOM in devtools and have them recall that this does not change the actual HTML source file
- [ ] :speaking_head: Tell students that we can use Javascript to update the DOM and therefore give users a different experience as they interact with our page

---


## Loading Your JavaScript _(10 mins)_

**Script Tag**
- [ ] :speaking_head: Remind students that we can bring in JavaScript using the `script` tag
- [ ] :speaking_head: Tell students that if there is just a small piece, they can write it directly between the tags eg. `<script>console.log('Hello')</script>`
- [ ] :speaking_head: Point out that this could get very large very quickly so we usually bring in other files
- [ ] :computer: Create a new JS file with the console.log and bring it in with a script tag in the head, show how it runs

**defer Tag & other options***
- [ ] :computer: Add `document.querySelector('#heading').textContent = "Welcome"` to your JavaScript and reload, noting the console error
- [ ] :speaking_head: Tell students that often our JS files reference elements in the DOM so we need to make sure that the DOM is loaded before it tries to access it
- [ ] :speaking_head: Tell students there are 3 ways we can acheive this
- [ ] :computer: Move the script tag to be below the h1 in `index.html` and ask students why they think this might work
- [ ] :computer: Move the script tag back to the top and add the `defer` script and explain what it is doing, show it work
- [ ] :exclamation: Advise students that we will come back to the other option a bit later but `defer` is the latest and preferred approach

---

## Selecting Elements _(10 mins)_

**Selectors**
- [ ] :grey_question: Point out the `querySelector` and ask students what this is doing and what it is returning
- [ ] :grey_question: Ask students how they think we could use `querySelector` by tag, class, etc.
- [ ] :computer: Show students a `querySelectorAll` and explain the usage and return type _(NodeList)_
- [ ] :computer: Show students a `getElementById` and explain the usage and return type _(Element)_
- [ ] :computer: Show students a `getElementsByClassName` and explain the usage and return type _(HTML Collection)_
- [ ] :computer: Show students a `getElementsByTagName` and explain the usage and return type _(HTML Collection)_

---

## Testing in the DOM _(20 mins)_

**Blockers**
- [ ] :speaking_head: Tell students that testing the DOM is considered notoriously tricky
- [ ] :speaking_head: Tell students that the issue lies in that our tests don't usually run in the browser so don't have access to the `document`
- [ ] :speaking_head: Tell students we need to overcome this with some tool which can create a simulation of the DOM with which we can interact during our tests
- [ ] :speeaking_head: Tell students that there are various options and Jest has some great tools to get us started so we will setup as we have done before

**Setup** 
- [ ] :computer: `npm init -y`, `npm install -D jest`, update `package.json` scripts to `"test": "jest --watchAll"`
- [ ] :computer: Create a `test` folder and add a `layout.spec.js` file with a `describe` block
- [ ] :exclamation: Students should be comfortable with this flow but if questions arise, address them as appropriate
- [ ] :speaking_head: Tell students that we can define the contents of Jest's own `document` by assigning an HTML string to `document.documentElement.innerHTML`
- [ ] :speaking_head: Tell students that we often will need just a small piece of HTML eg. `document.documentElement.innerHTML = '<ul id="food-list"></ul>'`
- [ ] :speaking_head: Tell students that we can also bring in entire HTML files if we need but we will need a bit of extra help
- [ ] :computer: Add the code below to the layout test file and go through it line by line
- [ ] :grey_question: Ask students when they think `beforeEach` runs
- [ ] :exclamation: Advise students that `beforeEach` is a useful Jest hook that will run before each test
- [ ] :computer: Nest `describe` blocks for 'head' and 'body' and ask students what we could check for
- [ ] :computer: Have students navigate you writing some tests for eg. 'has a title', 'has a heading', 'has an "add item" button, 'has a button to switch modes' _(see completed branch for inspiration)_
- [ ] :computer: Run the test suite and get all the layout tests passing
- [ ] :exclamation: Tell students that we will come back and add more tests soon, when we have a better idea of what we want to do

```js
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
}
```

---

## Events _(30 mins)_

:question: **What are some Events that might happen on a web page?** \
**A**: mouse click, key press, data copied... many! 
- [ ] :speaking_head: Tell students that as users use our websites they create different events
- [ ] :speaking_head: Tell students examples of events include clicking on a button, hovering or scrolling
- [ ] :speaking_head: Tell students there are also events that are not initiated by the user but the website itself
- [ ] :speaking_head: Tell students one example of this could be the website being fully loaded
- [ ] :computer: Show students a [list of DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp) and pick out a couple of examples

:question: **How can we keep track of when Events occur?** \
**A**: Event listeners
- [ ] :speaking_head: Tell students that we need to setup 'listeners' to listen out for events
- [ ] :computer: Show students `addEventListener` eg. `button.addEventListener('click', (e) => console.log('Ouch!'))` and walk through each part
- [ ] :speaking_head: Tell students we could also set the property of `onclick` of `button` eg. `button.onclick = (e) => console.log('Ouch!')`
- [ ] :exclamation: Advise students that if using `addEventListener` they can add multiple `click` events to an element but not with the `onclick` property approach
- [ ] :computer: Show students how to find the appropriate event and property names from the W3 link above
- [ ] :computer: Locate the `DOMContentLoaded` event and ask where this could be useful
- [ ] :computer: Add a listener for it and have it invoke an `initBindings` type of function
- [ ] :computer: Settle for keeping the nice function but ditching the event listener in favour of `defer`

**Testing events**
- [ ] :speaking_head: Tell students that what we probably really want to test is the function that an event triggers
- [ ] :computer: Show students a test for a `dark mode` switch and point out that we have tested it from the point the event is triggered
- [ ] :exclamation: Advise students that we will look into the `.style` and `.textContent` properties shortly

```js
test('darkMode makes text white, content background black, and sets button text', () => {
    helpers.darkMode();
    expect(main.style.color).toBe('white');
    expect(main.style.backgroundColor).toBe('black');
    expect(modeBtn.textContent).toBe('Switch to Light Mode');
})
```

**The Event Object**
- [ ] :speaking_head: Tell students that each time an event happens an event object is created
- [ ] :computer: Add `event` or `e` as a param for the event listener just created and log the object
- [ ] :speaking_head: Tell students this can provide us useful information about the event
- [ ] :computer: Add `document.addEventListener('keydown', e => console.log(e))` and look at the logged objects
- [ ] :computer: Note the `key` and `keyCode` properties of the keydown event object
- [ ] :exclamation: Advise students that `keyCode` has been deprecated so it's advisable to use `key`

**Event Objects in Test**
- [ ] :speaking_head: Tell students that when testing functions that rely on receiving an event object, we can make a fake one
- [ ] :speaking_head: Tell students that we only need to include the properties that will be used
- [ ] :grey_question: Ask students if they know the Konami code _(up up down down left right right B A)_
- [ ] :computer: Have students navigate you through writing a test for 'header updates when the Konami code is correctly entered'
- [ ] :exclamation: Use this opportunity to create a HTML snippet for test instead of using the whole file eg. `document.documentElement.innerHTML = '<h1>Welcome</h1>';` in a `beforeEach` hook

```js
describe('easter eggs', () => {
    test('an image with is added to the DOM when the Konami code is correctly entered', () => {
        const correctKonami = [
            'ArrowUp', 'ArrowDown', 'ArrowUp', 'ArrowDown', 
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'A', 'B'
        ]
        correctKonami.forEach(k => easterEggs.konami({ key: k }))
        
        expect(header.textContent).toContain('You cracked the code!');
    })
})
```
---

## Break _(5 mins)_
---

## Updating and Adding Content _(10 mins)_

**Updating content** 
- [ ] :speaking_head: Tell students we can update the text of an element by reassigning the `textContent` property
- [ ] :speaking_head: Tell students we can update the inner HTML of an element by reassigning the `innerHTML` property but to use this with some caution to avoid HTML injection
- [ ] :computer: Show students the different result of assigning ```"<button onclick='alert(`U were pwnd`)'>Free Hugs</button>"``` to textContent vs innerHTML
- [ ] :exclamation: Advise students that this might not seem like a likely issue now but what if you were assigning these to a value that any user could type into some input...

**Creating elements**
- [ ] :speaking_head: Tell students that a more explicit and elegant way of adding HTML elements is to create and craft them before adding them to the DOM
- [ ] :computer: Show students `const newLi = document.createElement('li')` and ask how they think they'd create a new h1, span etc.
- [ ] :computer: Add some `textContent` to the new li and then `append` it to the document
- [ ] :computer: Show students how to set ids, classes and other attributes eg. `el.id =`, `el.className =`, `el.setAttribute('src', 'img.jpg')`
- [ ] :computer: Show students the applied changes in devtools
- [ ] :exclamation: Advise students that they can update these properties on any element, not just new ones
- [ ] :computer: Append the new element to the body or an appropriate parent eg. a `ul` with `ul.append(newLi)`

**Deleting elements**
- [ ] :computer: Show students how to remove an element with the `el.remove()` method

---

## Updating and Adding CSS _(10 mins)_

**The style object** 
- [ ] :speaking_head: Tell students that elements have a `style` property that points to an object
- [ ] :computer: Log an element and look at the `style` object (set some inline CSS if needed)
- [ ] :computer: Select the element and add a property to the `style` object eg. `el.style.color = 'red'`
- [ ] :exclamation: Tell students that they could also use `setAttribute` here passing `style` as the first argument but to be aware that it will overwrite the whole object

---

## Using External Libraries _(10 mins)_

**CDN** 
- [ ] :speaking_head: Tell students that we can bring in external libraries via a CDN eg. [GSAP CDN](https://cdnjs.com/libraries/gsap)
- [ ] :computer: Bring in GSAP, referencing the [Getting Started docs](https://greensock.com/get-started/#loading-gsap)
- [ ] :computer: Add `header.addEventListener('mouseover', () => gsap.to("#heading", {duration: 1, x: 100, opacity: 0.1}));` somewhere appropriate

**Install & Bundle**
- [ ] :speaking_head: Tell students that we can also install packages as dependencies as we did with jest but this would mean we would need to 'build' our app using a module bundler
- [ ] :exclamation: Advise students that we will be using a module bundler called Webpack later in the course
- [ ] :exclamation: Tell students that if they are just using a couple of libs, a CDN probably works out a bit better as the user may even have it cached if they've visited another website
- [ ] :exclamation: Tell students that if they really want to use a module bundle already, to check out the [fp wiki docs](https://github.com/getfutureproof/fp_guides_wiki/wiki/Browserify) on browserify

---

## Questions _(5 mins)_
