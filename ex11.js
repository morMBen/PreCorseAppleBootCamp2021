const { question } = require("readline-sync");

(function () {
    'use script'

    let isPali = 'a';
    let input = require('readline-sync');
    let userInput = input.question("Please write something and you will find out if it's a palindrom:");
    let parityLenght = (userInput.length % 2 == 0) ? userInput.length : userInput.length - 1;
    for (let i = 0, j = userInput.length - 1; i < (parityLenght / 2); i++, j--) {
        if (!(userInput[i] === userInput[j])) {
            isPali = 'NOT a';
        }
    }
    console.log(`The sentence you entered is ${isPali} palindrome`);


}());