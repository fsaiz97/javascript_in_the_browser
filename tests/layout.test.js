// /**
//  * @jest-environment jsdom
//  */

// const fs = require('fs');
// const path = require('path');
// const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8')

const renderDom = require('./helpers')

let dom;
let document;

describe('index.html', () => {
    // beforeEach(() => {
    //     document.documentElement.innerHTML = html.toString();
    // })

    beforeEach(async () => {
        dom = await renderDom('index.html')
        document = await dom.window.document;
    })

    test("body has a heading", () => {
        let heading = document.getElementById('heading');
        expect(heading).toBeTruthy();
        expect(heading.innerHTML).toBe("JavaScript in the Browser")
    })

    test("body has an add button", () => {
        let addButton = document.getElementById('add-item');
        expect(addButton).toBeTruthy();
        expect(addButton.innerHTML).toBe('Add Item');
    })

    test("item 1 and 2 change titles when the add button is clicked", () => {
        // Assign variables
        const button = document.querySelector('button');
        const item1 = document.querySelector('#item-1')
        const item2 = document.getElementById('item-2')

        // Expect
        expect(item1.textContent).toBe("hummusx");
        expect(item2.textContent).toBe("cucumberx");
        // Event click
        button.dispatchEvent(new dom.window.Event("click"))

        // Expect
        expect(item1.textContent).toBe("Task 1 is performed")
        expect(item2.textContent).toBe("Task 2 is performed")
    })
})
