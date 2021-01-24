(function () {
    'use script'
    let input = require('readline-sync');
    let userString = input.question('Please insert a string and press ENTER:');
    userString = userString.split('');
    for (let i = 0; i < userString.length; i++) {
        if (userString[i] == 'a' || userString[i] == 'e' || userString[i] == 'i' || userString[i] == 'o' || userString[i] == 'u' || userString[i] == 'y') {
            userString[i] = userString[i].toUpperCase();
        }
    }
    userString = userString.join('');
    console.log(userString);

}());