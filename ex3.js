(function () {
    'use strict';

    const input = require('readline-sync');
    let userNum = input.question('Please type a number between 1-9 and press ENTER: ');

    switch (userNum) {
        case '0':
            console.log('"ZERO"');
            break;
        case '1':
            console.log('"ONE"');
            break;
        case '2':
            console.log('"TWO"');
            break;
        case '3':
            console.log('"THREE"');
            break;
        case '4':
            console.log('"FOUR"');
            break;
        case '5':
            console.log('"FIVE"');
            break;
        case '6':
            console.log('"SIX"');
            break;
        case '7':
            console.log('"SEVEN"');
            break;
        case '8':
            console.log('"EIGTH"');
            break;
        case '9':
            console.log('"NINE"');
            break;
        default:
            console.log('"TYPING ERROR"')
    }
}());
