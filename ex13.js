(function () {
    'use script'
    let input = require('readline-sync');
    let userString = input.question('Please insert a string and press ENTER:');

    let itIsANewWord = true;
    let theLongestWord = [''];
    let tempWord = '';

    userString = userString.split('');

    function isThisALetter(i) {
        return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
    }


    for (let i = 0; i < userString.length; i++) {
        if (isThisALetter(userString[i])) {
            tempWord += userString[i];
            if (!isThisALetter(userString[i + 1]) || i + 1 == userString.length) {
                if (tempWord.length > theLongestWord[0].length) {
                    theLongestWord = [tempWord];
                } else if (tempWord.length == theLongestWord[0].length) {
                    for (let n = -1; n < theLongestWord[0].length; n++) {
                        if (theLongestWord[n + 1] === tempWord) {
                            itIsANewWord = false;
                        }
                    }
                    if (itIsANewWord) {
                        theLongestWord.push(tempWord);
                    }

                    itIsANewWord = true;
                }
                tempWord = '';
            }
        }
    }

    let massegeForOneWord = `The longest word is: ${theLongestWord.join('')}`,
        massegeForAFewWords = `There are ${theLongestWord.length} words of the same length that are the longest words,
        the words are: ${theLongestWord.join(', ')}.`,
        MessageWithoutWords = 'You did not write a single word. ';

    if (theLongestWord.length > 1) {
        console.log(massegeForAFewWords);
    } else {
        if (theLongestWord[0] == '') {
            console.log(MessageWithoutWords);
        }
        else {
            console.log(massegeForOneWord);
        }
    }
}());