(function () {
    'use strict';
    const input = require('readline-sync');
    let userInput = input.question('Please write something: ');
    let stingLength = userInput.length;
    userInput = userInput.split('');

    for (let x = 0; x < stingLength; x++) {
        if (userInput[x] == ' ') {
            userInput[x] = '*';
        }
    }

    userInput = userInput.join('');

    console.log(userInput);


}());