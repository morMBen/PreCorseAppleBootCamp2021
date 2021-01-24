(function () {
    'use strict';

    const input = require('readline-sync');
    let userNum = Number(input.question('Please choose a number larger then 10:'));
    do {
        if (!userNum) {
            userNum = Number(input.question('Wrong input!\nPlease choose a number larger then 10:'));
        } else if (userNum <= 10) {
            userNum = Number(input.question('Please choose a number LARGER then 10:'));
        }
    }
    while (!(userNum > 10));
    console.log('Thenk you.')

}());