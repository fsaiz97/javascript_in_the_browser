 const path = require('path');
 const jsdom = require('jsdom');
 const { JSDOM } = jsdom;

 const renderDom = async (filename) => {
    const filePath = path.join(process.cwd(), filename); // process.cwd --> __dirname

    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously', // can execute scripts in the DOM
        resources: 'usable' // can load external resources in the DOM
    })

    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener("DOMContentLoaded", () => {
            resolve(dom);
        })
    })
 }

 module.exports = renderDom;
