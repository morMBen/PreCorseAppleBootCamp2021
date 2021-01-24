(function () {
    'use strict';

    const input = require('readline-sync');
    let player1Wallet = 50, player2Wallet = 50, playerBet = 0, oneOrTwo = 0, numberOfRounds = 5;
    let cardSign = ['♣', '♠', '♥', '♦'];
    let user1Card, user2Card, roundWinner = '', gameWinner, gameResult;
    let tempCard = new Array(2);
    let gameOn = true, againstPC;
    let user1Name = 'Player 1 ', user2Name = 'Player 2 ';
    let massWelcomToWar = `╔═╦═╦═╦═╦═╦════════════════╦═╦═╦═╦═╦═╗\n╟○╫═╫○╫═╫○╫════════════════╫○╫═╫○╫═╫○╣\n╟═╫♥╫═╫♦╫═╫═Welcome To WAR═╫═╫♣╫═╫♠╫═╣\n╟○╫═╫○╫═╫○╫╍┸┸┸┸┸┸┸╍┸┸╍┸┸┸╍╫○╫═╫○╫═╫○╣\n╚═╩═╩═╩═╩═╩════════════════╩═╩═╩═╩═╩═╝`, massAskForName = 'Please enter your name: ',
        massTypingError = ' \nTyping error, the options are ONLY 1 or 2.\nTry again...',
        massGameType = `How would you like to play?
1. One player against the computer.
2. Two players.
`, massForFirstGambler = `you will be the first player to determine the bet amount,
next time the player who wins the round will determine.`, massForWiningGambler = 'you won so you will determine the height of the bet in this round';
    ;
    let messForRoundNo = [`╔═╦═╦═╦═╦═╦═════════════════╦═╦═╦═╦═╦═╗\n╟○╫═╫○╫═╫○╫═════════════════╫○╫═╫○╫═╫○╣\n╟═╫♥╫═╫♦╫═╫══┥Round No' 1┠══╫═╫♣╫═╫♠╫═╣\n╟○╫═╫○╫═╫○╫╍╍╍┸┸┸┸┸╍┸┸╍╍┸┸╍╍╫○╫═╫○╫═╫○╣\n╚═╩═╩═╩═╩═╩═════════════════╩═╩═╩═╩═╩═╝`, `╔═╦═╦═╦═╦═╦═════════════════╦═╦═╦═╦═╦═╗\n╟○╫═╫○╫═╫○╫═════════════════╫○╫═╫○╫═╫○╣\n╟═╫♥╫═╫♦╫═╫══┥Round No' 2┠══╫═╫♣╫═╫♠╫═╣\n╟○╫═╫○╫═╫○╫╍╍╍┸┸┸┸┸╍┸┸╍╍┸┸╍╍╫○╫═╫○╫═╫○╣\n╚═╩═╩═╩═╩═╩═════════════════╩═╩═╩═╩═╩═╝`, `╔═╦═╦═╦═╦═╦═════════════════╦═╦═╦═╦═╦═╗\n╟○╫═╫○╫═╫○╫═════════════════╫○╫═╫○╫═╫○╣\n╟═╫♥╫═╫♦╫═╫══┥Round No' 3┠══╫═╫♣╫═╫♠╫═╣\n╟○╫═╫○╫═╫○╫╍╍╍┸┸┸┸┸╍┸┸╍╍┸┸╍╍╫○╫═╫○╫═╫○╣\n╚═╩═╩═╩═╩═╩═════════════════╩═╩═╩═╩═╩═╝`, `╔═╦═╦═╦═╦═╦═════════════════╦═╦═╦═╦═╦═╗\n╟○╫═╫○╫═╫○╫═════════════════╫○╫═╫○╫═╫○╣\n╟═╫♥╫═╫♦╫═╫══┥Round No' 4┠══╫═╫♣╫═╫♠╫═╣\n╟○╫═╫○╫═╫○╫╍╍╍┸┸┸┸┸╍┸┸╍╍┸┸╍╍╫○╫═╫○╫═╫○╣\n╚═╩═╩═╩═╩═╩═════════════════╩═╩═╩═╩═╩═╝`, `╔═╦═╦═╦═╦═╦═════════════════╦═╦═╦═╦═╦═╗\n╟○╫═╫○╫═╫○╫═════════════════╫○╫═╫○╫═╫○╣\n╟═╫♥╫═╫♦╫═╫══┥Round No' 5┠══╫═╫♣╫═╫♠╫═╣\n╟○╫═╫○╫═╫○╫╍╍╍┸┸┸┸┸╍┸┸╍╍┸┸╍╍╫○╫═╫○╫═╫○╣\n╚═╩═╩═╩═╩═╩═════════════════╩═╩═╩═╩═╩═╝`, `╔═╦═╦═╦═╦═╦═════════════════╦═╦═╦═╦═╦═╗\n╟○╫═╫○╫═╫○╫═════════════════╫○╫═╫○╫═╫○╣\n╟═╫♥╫═╫♦╫═╫══┥Round No' 6┠══╫═╫♣╫═╫♠╫═╣\n╟○╫═╫○╫═╫○╫╍╍╍┸┸┸┸┸╍┸┸╍╍┸┸╍╍╫○╫═╫○╫═╫○╣\n╚═╩═╩═╩═╩═╩═════════════════╩═╩═╩═╩═╩═╝`, `╔═╦═╦═╦═╦═╦═════════════════╦═╦═╦═╦═╦═╗\n╟$╫═╫$╫═╫$╫═════════════════╫$╫═╫$╫═╫$╣\n╟═╫$╫═╫$╫═╫══♛══┥BONUS┠══♛══╫═╫$╫═╫$╫═╣\n╟$╫═╫$╫═╫$╫═════════════════╫$╫═╫$╫═╫$╣\n╚═╩═╩═╩═╩═╩═════════════════╩═╩═╩═╩═╩═╝`];

    //פונקציה להגרלת קלף
    function drawCard() {
        tempCard[0] = Math.floor(Math.random() * 12) + 1;
        tempCard[1] = cardSign[Math.floor(Math.random() * 4)];
        return [tempCard[0], tempCard[1]];
    }
    //פונקציה למציאת ההימור הגבוהה ביותר שניתן
    function higestBet() {
        return player1Wallet >= player2Wallet ? player2Wallet : player1Wallet;
    }
    //פונקציה למציאת השחקן הראשון
    function whosFirst() {
        if (roundWinner == '') {
            return user1Name;
        } else {
            return roundWinner;
        }
    }

    function whichWallet(whosFirst) {
        if (whosFirst == '') {
            return player1Wallet;
        } else {
            return whosFirst == user1Name ? player1Wallet : player2Wallet;
        }
    }

    function whoWonTheGame() {
        if (player1Wallet != player2Wallet) {
            gameWinner = player1Wallet > player2Wallet ? user1Name : user2Name;
            return gameWinner;

        } else {
            gameWinner = 'draw';
            return gameWinner;
        }
    }

    function gamblingCal() {
        if (user1Card[0] > user2Card[0]) {
            player1Wallet = player1Wallet + playerBet;
            player2Wallet = player2Wallet - playerBet;
        } else {
            player1Wallet = player1Wallet - playerBet;
            player2Wallet = player2Wallet + playerBet;
        }
        gameResult = user1Card[0] > user2Card[0] ? roundWinner = user1Name : roundWinner = user2Name;
    }

    //הודעת כניסה
    console.log(massWelcomToWar);

    // אופן משחק - נגד המחשב או שני שחקנים
    do {
        if (!(oneOrTwo == 0)) {
            console.log(massTypingError);
        }
        oneOrTwo = Number(input.question(massGameType));
    } while (!(oneOrTwo == 1) && !(oneOrTwo == 2));
    againstPC = oneOrTwo == 1 ? true : false;
    oneOrTwo = 0;

    //בקשת שם / שתי שמות מהמשתמש / משתמשים
    if (againstPC) {
        user1Name = input.question(massAskForName);
    } else {
        user1Name = input.question(user1Name + massAskForName);
        user2Name = input.question(user2Name + massAskForName);
    }

    //לולאת סבב המשחק - כל סבב מכיל 5 סיבובים ואופציה לאחד נוסף
    for (let i = 0; gameOn && i < numberOfRounds; i++) {
        //בקשת הימור מהמשתמש / או מהמשתמש המוביל
        console.log(messForRoundNo[i]);
        if (againstPC) {//בקשת הימור מהמשתמש
            playerBet = Number(input.question(`Hello ${user1Name} You currently have ${player1Wallet} dollars
Place your bet for the next round: 1 to ${higestBet()}
`));// 
        } else {//בקשת הימור מהמשתמש המוביל או מהשחקן הראשון
            if (roundWinner == '') {
                playerBet = Number(input.question(`${whosFirst()} ${massForFirstGambler}
So ${whosFirst()} You currently have ${whichWallet(whosFirst())} dollars
Place your bet for the next round: 1 to ${higestBet()}
        
`));
            } else {
                playerBet = Number(input.question(`${whosFirst()} ${massForWiningGambler}
So ${whosFirst()} You currently have ${whichWallet(whosFirst())} dollars
Place your bet for the next round: 1 to ${higestBet()}

`));
            }

        }
        if (!playerBet || playerBet < 1 || playerBet > higestBet()) {
            console.log(`I said between 1 to ${higestBet()} and you tried to get smart,
You have lost everyone's trust in you !!! Go play with someone else,
Bye...`);
            break;
        }
        playerBet = Math.round(playerBet);
        user1Card = drawCard();
        user2Card = drawCard();

        gamblingCal();

        if (againstPC) {
            console.log(`Your card is ${user1Card.join('')} And my card is ${user2Card.join('')} 
${roundWinner == user1Name ? 'You Won!! ' : 'You lost '}${playerBet} And now you have ${player1Wallet}`)
        } else {
            gameResult = user1Card[0] > user2Card[0] ? roundWinner = user1Name : roundWinner = user2Name;
            console.log(`The winner is ${roundWinner}!!! And the winning amount is ${playerBet} dollars :)
${user1Name}'s card is ${user1Card.join('')} and ${user2Name}'s card is ${user2Card.join('')}.
${user1Name} now has ${player1Wallet} dollars and ${user2Name} now has ${player2Wallet} dollars.
` );
        }
        if (player1Wallet <= 0 || player2Wallet <= 0) {
            if (!againstPC) {
                console.log(`${whoWonTheGame()} take your ${whichWallet(whoWonTheGame())} dollars and go buy yourself some new shirt
${player1Wallet == 0 ? user1Name : user2Name} You are broke...Bye Bye`);
            } else {
                if (whoWonTheGame() == user1Name) {
                    console.log(`You Won The Game!!
The game was fair and you were a worthy contender.
Take your ${player1Wallet} dollars and go buy yourself some new shirt,
until next time you can look a little better :P`);
                } else {
                    console.log(`You are broke...Bye Bye`);
                }
            }
            gameOn = false;
        } else {
            if (numberOfRounds < 6) {
                do {
                    if (!(oneOrTwo == 0)) {
                        console.log(' \nTyping error, the options are ONLY 1 or 2.\nTry again...');
                    }
                    if (i == 4) {
                        console.log(messForRoundNo[6]);
                        oneOrTwo = Number(input.question(`You have already played five rounds,
but you are lucky and got a chance for another round.
1. Play a sixth round.
2. Give up the opportunity.
`));
                    }
                    else {
                        oneOrTwo = Number(input.question(`1. Play another round
2. Leave with your money: -)
`));
                    }
                } while (!(oneOrTwo == 1) && !(oneOrTwo == 2));
            }
            if (i == 4 && oneOrTwo == 1) {
                numberOfRounds++;
            }
            if (againstPC) {
                if (oneOrTwo == 2 || i == 5) {
                    console.log(`The game was fair and you were a worthy contender.
Take your ${player1Wallet} dollars and go buy yourself some new shirt,
until next time you can look a little better.`);
                    gameOn = false;
                }
            } else {
                if (oneOrTwo == 2 || i == 5) {
                    console.log(`The game was very fair, you were a worthy contenders.`);
                    if (whoWonTheGame() == 'draw') {
                        console.log(`There is a draw!
for both of you ${user1Name} and ${user2Name} the same amount in their wallet ${player1Wallet} dollars.`);
                    } else {
                        console.log(`${whoWonTheGame()} take your ${whichWallet(whoWonTheGame())} dollars and go buy yourself some new shirt,
And ${whoWonTheGame() == user1Name ? user2Name : user1Name} maybe if you sell your shirt you can go back for another try :)`)
                    }
                    gameOn = false;
                }
            }
            oneOrTwo = 0;
        }
    } 2

}());