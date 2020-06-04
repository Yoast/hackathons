import _ from 'lodash';
var Typo = require("typo-js");
var dictionary = new Typo("en_US", false, false, { dictionaryPath: "../wp-content/plugins/hackathon_4_6_2020/node_modules/typo-js/dictionaries" });

const word1 = "mispelled";
const word2 = "misspelled";
console.log(word1 + " is spelled correctly: " + dictionary.check(word1));
console.log(word2 + " is spelled correctly: " + dictionary.check(word2));

const js_output = document.getElementById("js_output");

const word_input = document.getElementById("word");

function logSubmit(event) {

    console.log(word_input.value);

    event.preventDefault();

    const result = "The word " + word_input.value + " is spelled correctly: " + dictionary.check(word_input.value);
    js_output.textContent = result;
    return result;
}

const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);





// function component() {
//     const element = document.createElement('div');
//     // Test if lodash works
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     console.log(element);
//     return element;
// }

// js_output.appendChild(component());