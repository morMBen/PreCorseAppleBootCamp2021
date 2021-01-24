(function () {
    'use strict';

    const input = require('readline-sync');

    let firstNumber = Number(input.question('Hay there,\nplease enter two numbers and I will tell you if together they are equal to ten.\nstart with your first one and press ENTER: '));
    let secondNumber = Number(input.question('Please write your second number and press ENTER:'));

    firstNumber + secondNumber == 10 ? console.log('"makes 10"') : console.log('"nope"');


})();