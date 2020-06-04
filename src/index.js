import _ from 'lodash';

console.log("Hello, Javascript here. I am being loaded ");
console.log("Hello, how are you? ");

function component() {
    const element = document.createElement('div');

    // Test if lodash works
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    console.log(element);
    return element;
}

document.body.appendChild(component());