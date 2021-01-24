(function () {
    'use strict';
    const input = require('readline-sync');
    let userNum;
    do {
        if (userNum === undefined) {
            userNum = Number(input.question('Hello please enter an positive integer number and perss ENTER:'));
        } else {
            userNum = Number(input.question(`Oops ... Looks like you did not type correctly!
             Try again and remember you must enter an INTIGER PSITIVE NUMBER:`));
        }
    }
    while (!userNum || !Number.isInteger(userNum) || userNum < 1);

    let userArr = new Array(userNum);

    for (let i = 0; i < userArr.length; i++) {
        userArr[i] = Math.floor(Math.random() * 50) + 1;
    }
    console.log(`min is ${Math.min(...userArr)}`);
    console.log(`max is ${Math.max(...userArr)}`);


}());

