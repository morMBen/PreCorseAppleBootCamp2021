
(function () {
    'use strict';
    const input = require('readline-sync');
    let isInt = false;
    let userNum = 0;
    do {
        userNum = Number(input.question('Please enter an POSITIVE INTEGER number:'));
        if (Number.isInteger(userNum) === true && userNum >= 0) {
            isInt = true;
        } else {
            isInt = false;
        }
    }
    while (!isInt);

    if (userNum === 0 || userNum === 1) {
        userNum = 1;
    } else {
        for (let n = userNum - 1; n > 1; n--) {
            userNum *= n;
        }
    }
    console.log(userNum);



}());