(function () {

    /*The Sopranos Quiz:
    
    I chose to do a quiz for the user based on the "The Sopranos" series,
    the quiz will test the user's toughness and whether he is suitable to be a Mafia member.
    The quiz will have 10, with each question having 4 options to choose from plus one option to leave the quiz.
    After the user answers the questions, we will show him which character he is from the series and in addition we will draw lines for his character.
    
    
    I chose to write the algorithm as follows:
    
    I first wrote all the Srings messages, some of them were also organized inside arrays so I could pull them out as needed.
    
    array Q&A:
    The array is made up of ten cells with each cell containing -
    string
    An array of four cells in each cell has Strings (the options to choose from for each question).
    Array of four cells = of numbers (arranged in the order of scoring the answers).
    
    array to exit - an array built from a single cell of a string, which will give us the option to use it to exit the game using an option - throw.
    
    Print an opening message for the user
    
    Loop to play the game - I chose for loop
    The loop is tuned to ten entries so that it covers all the questions.
    Inside the loop is printed the question number
    Then with the keyInSelect function the user is given the question and four options to choose from.
    After the user selects his answer the points of his choice will be kept inside the int.
    And again the loop will start again.
    * If he chooses 0 (cancel) he will ask if he is sure he wants to leave
    Here too he will be asked by the function keyInSelect, if he decides to exit he will decide to exit we will finish the operation by - Throw.
    
    Checking the score of user answers by if, else if, else and matching them to the appropriate character. 
    By keeping the character message inside the end message string.
    
    Print an end message to the user that contains the character that describes the user.
    */
    'use strict';
    const input = require('readline-sync');

    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓saved masseges↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let hellowMassege = '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n▬▬▬▬▬▬---Hello Welcome to the quiz!---▬▬▬▬▬▬\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nDo you know the Sopranos series? Good!\nCan you be a mafia boss or will you be eliminate0d quickly? \nAnswer the questions and you will find out.\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n';
    let questionNumber = [
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬First Question▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Second Question▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Third Question▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Fourth question▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Fifth question▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Sixth question▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Seventh question▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Eighth question▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Ninth question▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n',
        '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Tenth question▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n'
    ];
    let lineSeparator = '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n';
    let tony = 'You\'re Tony Soprano - a mafia boss!\n\nYou probably experienced a crisis at a young age or were exposed to aggression at a young age.\nSo probably out of a feeling of failure you have developed for yourself a behavior of controlling those around you by force.\nAt the same time you are sharp and uncompromising about the things you want, \nyou strive to achieve your goals at all costs even if it means hurting others.';
    let corrado = 'You\'re Corrado John Soprano Jr. - a former mafia boss.\n\nYou have it all, you\'re tough and ruthless but you\'re not so up to date with what\'s going on right now. \nYou get your information from others and it slows down your actions, \nif you could you would have done everything yourself but you are no longer aged :)';
    let criss = 'You\'re Chris Multisenti - nephew of mafia boss!\n\nYou are tough in nature but you have a tendency to have pleasures that do not let you progress. \nYou are constantly trying to prove yourself to people that you are good at yourself, \nyou are loyal and go to the end with your heart yet you can also be ruthless.';
    let poly = 'You\'ll Polly Walnuts Geltieri - you\'re a soldier in the mafia!\n\nYou really want to be tough but you do not have it, you show weakness around people. \nYou cling to powerful people and give them a lot of respect, \nwe would recommend you look behind your shoulder. That you will not be eliminated.'
    let carmela = 'You are Carmela Soprano - the wife of a boss in the mafia!\n\nTough is the last word that can be said about you, you are considerate and gentle and kind to those around you. \nYou do not have a drop of attempt to control others and you are all in giving to others. \nTry to stay that way it\'s really cute, \njust do your best to stay away from people who take advantage of you.'
    let quizRes = lineSeparator + '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬Quiz results▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n';

    //↓↓↓↓↓↓↓↓↓An array containing the questions and answers of the test↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let myQuestions = [
        {
            question: 'If you lock yourself out of the house and it starts to rain, you ...',//q1
            answers: [
                'Climbs out the window.',
                'Calling my partner.',
                'I will call the employee and tell him to come quickly because I am starting to get wet.',
                'Calling a locksmith.'
            ],
            answerPoint: [1, 2, 3, 0]
        },
        {
            question: 'It\'s time to replace the car, which car will you look for?',//q2
            answers: [
                'No question at all Porsche Carrera 1982, Classic!',
                'Black Cadillac Jeep, just like that!',
                'Red.',
                'Mustang 2008 model, it was a great series.'
            ],
            answerPoint: [2, 3, 0, 1]
        },
        {
            question: '	You\'re having sex with your typically submissive partner. Suddenly, \nhe/she pulls out a blindfold and handcuffs and takes over. Would you able to lay back and let your partner be the boss?',//q3
            answers: [
                'Smiles and ties her up right away and goes on with mine.',
                'No.',
                'Yes.',
                'I do not know depends on who my partner is.'
            ],
            answerPoint: [3, 0, 2, 1]
        },
        {
            question: "Your boss has given you a complicated assignment that is due by the end of the week. \nHe has given you permission to complete the project in any way you see fit. What do you do?",//q4
            answers: [
                'Put together a team to help me complete the project.',
                'Delegate some of my tasks so that I can focus on the project.',
                'Work overtime until the project is done.',
                'I\'ll hire someone to do it for me.'
            ],
            answerPoint: [2, 0, 1, 3]
        },
        {
            question: 'You\'re at friend\'s party when you meet someone you would like to date \n.After talking all night, it\'s very clear that the attraction is mutual.What do you do?',//q5
            answers: [
                'Ask for the person\'s phone number.',
                'Depends on what my accumulation status is.',
                'Take him/her back to my place immediately.',
                'Give the person my phone number.'
            ],
            answerPoint: [2, 1, 3, 0]
        },
        {
            question: "Do you find yourself constantly finishing other people's sentences?",//q6
            answers: [
                'Yes',
                'Sometimes',
                'I want to but I can not make it in time',
                'No'
            ],
            answerPoint: [3, 2, 1, 0]
        },
        {
            question: 'Do you believe that in order to get things done right, you have to do them yourself?',//q7
            answers: [
                'The main thing for me to make things happen, most of the successful actions I did myself.',
                'No.',
                'I do not have a clear answer to that because sometimes it is so and sometimes so.',
                'Yes.'
            ],
            answerPoint: [3, 0, 1, 2]
        },
        {
            question: 'Your hairdresser wants to try a whole new look on you. Do you go for it?',//q8
            answers: [
                'Might be interesting, but only if I really trust this hairdresser.',
                'Never.',
                'I get angry at him and come out shouting that he will not experiment on me.',
                'Sure I like to try a new look.'
            ],
            answerPoint: [2, 1, 3, 0]
        },
        {
            question: 'At restaurants, do you order dressings and sauces "on the side"?',//q9
            answers: [
                'No.',
                'Yes',
                'Usually not if it\'s not acceptable.',
                'I do not order the food they know what to bring me alone.'
            ],
            answerPoint: [1, 2, 0, 3]
        },
        {
            question: 'What	do you think the world would be a better place if you ran it?',//q10
            answers: [
                'I prefer not to get into all this mess.',
                'I\'m already running the world.',
                'Obviously.',
                'Depends on whether I had the right conditions for it.'
            ],
            answerPoint: [0, 3, 2, 1]
        }
    ];

    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓An array to get out of the game↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let exitGame = [
        'Yes, I\'m sure I would like to go out'
    ];
    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Initialize the points in the game↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    let points = 0;
    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Displays an opening message to the user↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    console.log(hellowMassege);
    //↓↓↓↓↓↓Loop to run the test - presenting a question, receiving input and saving the points.↓↓↓↓↓↓↓↓
    for (let x = 0, y = 10; x < y; x++) {
        console.log(lineSeparator + questionNumber[x] + lineSeparator);
        let index = input.keyInSelect(myQuestions[x].answers, myQuestions[x].question);
        //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓A case where the user did not enter an answer↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        if (index == -1) {
            console.log(lineSeparator + lineSeparator);
            let index = input.keyInSelect(exitGame, 'You\'re sure you do not want to continue playing');
            //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓A Check that the user really wants to log out↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
            if (index == 0) {
                throw '"stop execution"';
            } else {
                x--;
                points++;
            }
        }

        if (index >= 0) {
            points = points + myQuestions[x].answerPoint[index];
        }
    }

    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Checking the results↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    if (points >= 0 && points < 6) {
        quizRes = quizRes + carmela;
    } else if (points >= 6 && points < 12) {
        quizRes = quizRes + poly;
    } else if (points >= 12 && points < 18) {
        quizRes = quizRes + criss;
    } else if (points >= 18 && points < 24) {
        quizRes = quizRes + corrado;
    } else {
        quizRes = quizRes + tony;
    }
    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓Display the result to the user↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    console.log(quizRes + '\n' + lineSeparator + lineSeparator);
}());