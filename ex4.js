(function () {
    'use strict';

    const input = require('readline-sync');
    console.log('Hi, we would be happy to recommend you a good restaurant in Tel Aviv. \nTo do this, answer the following questions...')
    let numOfPeople = input.question('How many people are you going whit?');//int
    numOfPeople = Number(numOfPeople);

    if (!numOfPeople || !Number.isInteger(numOfPeople) || numOfPeople <= 0) {
        console.log('Wrong choise you can only write a positive integer!')
        throw '"stop execution"';
    }
    let userNeedsKosher = input.question('Should it be Kosher? (y/n)');//char
    let MehadrinKo = "";
    if (userNeedsKosher != 'y' && userNeedsKosher != 'n') {
        console.log('Wrong choise you can write only the letters y / n!')
        throw '"stop execution"';
    }
    if (userNeedsKosher == 'y') {
        MehadrinKo = input.question('Should it be Kashrut Lemehadrin? (y/n)');
        if (MehadrinKo != 'y' && MehadrinKo != 'n') {
            console.log('Wrong choise you can write only the letters y / n!')
            throw '"stop execution"';
        }
    }
    let nonKosherRest = ['Abu Zaki', 'Oliveri', 'America Burgers', 'Minna Tomei'];
    let kosherRest = ['Fisherman\'s', 'SouPizza', 'Burgerim', 'Nini Hachi'];
    let mehadrinKosherRst = ['Regina', 'Tomato pizza', 'Agadir', 'Oshi Oshi'];
    let foodTypes = ['Middle eastern', 'Italian', 'American', 'Asian'];
    let index = input.keyInSelect(foodTypes, 'What kind of food do you want?');
    let ourRecommend = 'Our recommendation for you of an ' + foodTypes[index] + ' restaurant is ';
    if (userNeedsKosher == 'n') {
        ourRecommend = ourRecommend + nonKosherRest[index];
    } else {
        if (MehadrinKo == 'n') {
            ourRecommend = ourRecommend + kosherRest[index];
        } else {
            ourRecommend = ourRecommend + mehadrinKosherRst[index];
        }
    }
    if (index > 0 && index < 4) {
        console.log(ourRecommend + ' Tel-Aviv.');
    }
    else {
        console.log('We can not help you choose a restaurant without knowing what kind of food you would prefer.');
    }
}());