//React element-> we can create react element

const h2 = React.createElement('h2', { className: 'subheading' }, 'Hello React')
console.log("h2", h2);
// {
//     "type": "h2",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "subheading",
//         "children": "Hello React"
//     },
//     "_owner": null,
//     "_store": {}
// }

// this is react element is object

const h1 = {
    type: "p",
    $$typeof: Symbol.for('react.element'),
    key: null,
    ref: null,
    props: {
        "className": "subheading",
        "children": "Here is paragraph"
    },
    _owner: null,
    _store: {}
}
console.log("h1",h1); //so behind the seen our all elements are object





// ---------------------------------------------------------


// react DOM element-> React Dom is showing our content on browser
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(h2);  //Hello React

