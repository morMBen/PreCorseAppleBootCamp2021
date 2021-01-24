/*
description:
The "Hanged-Man" game is an word guessing game.
At first the computer selects a word and displays the word to the user when all the letters are replaced with asterisks
The participant must guess a letter or the whole word in each round.
If we guess a letter that exists in the word, the position of the letter is revealed in his face, if it is not, he continues to the next round.
If he guesses a whole word and he is wrong, he continues to the next round and the word revealed to him remains as it was.

End of the game:
- Victory - The user guessed the word before the rounds were over.
- Loss - The rounds are over and the user has not yet guessed the word.
_________________________________________________________________________
Description of the code implementation:
At first all the constants and variables of the code are defined.
Then nine functions are defined to help us work on the code as readably as possible
(Below you can see the details of each function).
At the end there is the code itself which consists of a welcome and instructions for the game and then a loop that includes the ten rounds of the game.
__________________________________________________________________________
Description of constants and variables:
figlet - Request for FIGlet fonts - Graphic fonts for CMD.
input  - Request for readline-sync.
userInput (string) - Gets the current input from the user.
hiddenWord (string) - The location where the word for guessing will be saved.
guessingLine (string) - The string that will be displayed to the user (will be the length of the word).
temp (string) - A string that will help us swap characters and words as needed.
isEmpty (bool) - Will help us know if this is the first time the user selects an option or if he has already tried and needs to be told what exactly to enter.
wordsBank (An array of strings) - An array that includes the words that can be grilled from them.
messForUser (Object) - An object that contains most of the messages from which the user can be displayed.

Description of function:
1 - ready - A function that accepts three variables and returns the first and second word has FIGlet fonts.
    The first variable is returned in a standard font The second variable is returned in the font of the third variable.
2 - getWord - A function that accepts One variable of an array of strings and returns one word (string) randomly
3 - hideWord - A function that accepts one number and returns a string of asterisks the length of the number entered
4 - replaceChar - A function that accepts three variables, character, string, and string. Checks the character and how many times the letter is in the word and with the help of the Will loop places the letter in the second word.
5 - checkWord -A function that accepts three variables, character, string, and string. Checks the character and how many times the letter is in the word and places the letter in the second word. Invites once the replaceChar function in a small letter and once in a capital letter.
6 - isThisALetter - A function that receives a character and returns true if the character is a large or small letter.
7 - isTheWordOnlyLetters - A function that receives a word and returns truth if it contains only lowercase or uppercase letters and a lie if the word also contains numerical or space characters
8 - oneOfTwoOps - A function that receives two variables of the string type (options for one of two options and a message of choice error), the user must enter option 1 or 2 and if he did not enter correctly, he is presented with the message of choice error and asked to enter again. Returns the user's input. 
9 - guessingMistake - A function that receives three string variables (user input request, notification that incorrect input was entered for option 1, notification that incorrect input was entered for option 2) requests input from the user and if the input is incorrect displays a typing error message according to the appropriate type and asks him to type again. Returns the user's correct input.
*/

(function () {
    'use strict';

    const figlet = require('figlet');
    const input = require('readline-sync');
    let userInput = '', hiddenWord, guessingLine, temp = '';
    let isEmpty = true;



    let wordsBank = ['Unfortunat', 'Fortunate', 'Hampionship', 'Kitesurfing', 'Basketball', 'Skateboarding', 'Skydiving', 'Badminton', 'Football', 'Gymnastics', 'Windsurfing', 'Swimming', 'Snowboarding'];

    let messForUser = {
        gameRules: `\nThe rules for the game:
- We will choose a word for you and you will have to guess it.
- You will have ten attempts,
- Each time you select one letter and if the letter exists in the word we will show you its location and
  you will be able to continue playing without the guess counting as an attempt.
  If the letter is not in the word you will lose one attempt and continue playing.
- If you can guess the word in less than ten attempts you will win.
Good luck ...`, wellcome: `--------------
=                                                                       =
=    Welcome To...        =
=------------=`, gameName: ` Hang Man`, oneOrTwoError: 'Typing error! You must choose one of the two options.', wordOrCharGuess: 'Think you already know the word? Select: 1. Guess one letter | 2. Guess the whole word  ', whatIsYourGuess: `What is your guess?`, charError: 'Mistake! You must select only a lowercase or uppercase letter. Try again...', wordError: 'Mistake! You must choose a word without spaces and without numbers or symbols. Try again...'
    };

    //1
    function ready(mass1, mass2, mass3) {
        console.log(figlet.textSync(mass1));
        console.log(figlet.textSync(mass2, mass3));
    }
    //2
    function getWord(arr) {
        let randNum = Math.floor(Math.random() * wordsBank.length),
            wordLottery = arr[randNum];
        return wordLottery;
    }

    //3
    function hideWord(length) {
        for (let i = 0; i < length; i++) {
            temp += '*';
        }
        return temp;
    }

    //4
    function replaceChar(char, word, line) {
        while (word.indexOf(char) > -1) {
            let tempPlace = word.indexOf(char);
            word = word.split('');
            line[tempPlace] = word[tempPlace];
            word[tempPlace] = '*';
            word = word.join('');
        }
    }

    //5
    function checkWord(char, word, line) {
        let tempWord = word;
        line = line.split('');
        replaceChar(char.toLowerCase(), word, line);
        replaceChar(char.toUpperCase(), word, line);
        word = tempWord;
        return line.join('');
    }

    //6
    function isThisALetter(i) {
        return ((i >= 'a' && i <= 'z') || (i >= 'A' && i <= 'Z'));
    }

    //7
    function isTheWordOnlyLetters(word) {
        let temp = word.split('');
        for (let i = 0; i < word.length; i++) {
            if (!isThisALetter(temp[i])) {
                return false;
            }
        }
        return true;
    }
    //8
    function oneOfTwoOps(mass1, mass2) {
        do {
            if (!isEmpty) {
                console.log(mass1);
            }
            userInput = input.question(mass2);
            isEmpty = false;
        } while (userInput != '1' && userInput != '2')
        isEmpty = true;
        return userInput;
    }

    //9
    function guessingMistake(mass1, mass2, mass3) {
        if (userInput == '1') {
            do {
                if (!isEmpty) {
                    console.log(mass2);
                }
                userInput = input.question(mass1 + 'Char... ');
                isEmpty = false;
            } while (!isThisALetter(userInput) || userInput.length > 1)
            guessingLine = checkWord(userInput, hiddenWord, guessingLine);
        } else {
            do {
                if (!isEmpty) {
                    console.log(mass3);
                }
                userInput = input.question(mass1 + 'Word... ');
                isEmpty = false;
            } while (!isTheWordOnlyLetters(userInput))
        }
        isEmpty = true;
        return userInput;
    }


    ready(messForUser.wellcome, messForUser.gameName, 'cosmike');
    console.log(messForUser.gameRules);
    hiddenWord = getWord(wordsBank);
    guessingLine = hideWord(hiddenWord.length);

    for (let i = 0; i < 10; i++) {
        ready('', `Round ${i + 1}`, 'poison');
        console.log(`You have ${10 - i} guesses left
The word is:`);
        console.log(guessingLine);

        oneOfTwoOps(messForUser.oneOrTwoError, messForUser.wordOrCharGuess);

        userInput = guessingMistake(messForUser.whatIsYourGuess, messForUser.charError, messForUser.wordError);

        if (guessingLine == hiddenWord || hiddenWord.toLowerCase() == userInput.toLowerCase()) {
            console.log(figlet.textSync('You won!!!', 'alligator2'));
            break;
        }
        if (i + 1 == 10) {
            console.log(`If you did not succeed in ten attempts I gave up.
The word was: ${hiddenWord}
And you lose !!!`);
            console.log(figlet.textSync('Game Over!!!', 'alligator'));
        }
        userInput = '';
    }





}());
