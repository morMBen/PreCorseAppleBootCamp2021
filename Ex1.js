(function () {
    'use strict';
    const input = require('readline-sync');
    let userName = input.question('Please write your name and press ENTER: ');
    console.log('Hello ' + userName);
})();