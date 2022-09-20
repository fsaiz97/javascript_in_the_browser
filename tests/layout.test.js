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
})
