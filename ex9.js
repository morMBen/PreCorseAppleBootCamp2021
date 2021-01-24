(function () {
    'use strict';

    const input = require('readline-sync');
    let userNum = 0;
    let isPrime = true;
    do {
        userNum = Number(input.question('Hello please write an psitive integer number and perss ENTER:'));
    }
    while (!userNum || !Number.isInteger(userNum) || userNum < 1);

    let primeCal = (userNum == 1) ? '' : '2';

    for (let x = 3; x <= userNum; x += 2) {
        for (let n = 3; n < x; n++) {
            if (x % n == 0) {
                n = x;
                isPrime = false;
            };
        }

        if (isPrime) {
            primeCal += ',' + x;
        }
        isPrime = true;
    };
    primeCal = (primeCal == '') ? 'One is not a prime number.' : `The prime numbers between the number one and the number you just wrote down are:
    `+ primeCal;
    console.log(primeCal);
}());