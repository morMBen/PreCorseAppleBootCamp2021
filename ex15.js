(function () {
    'use strict'

    let Motorcycles = ['Triumph', 'Harley-Davidson', 'Kawasaki', 'KTM', 'Ducati'];
    let Vehicles = ['Toyota', 'Audi', 'Volkswagen', 'Hyundai', 'Chevrolet', 'Ford', 'Nissan', 'Dodge'];

    function uniteArr(arr1, arr2) {
        let twoArrLength = arr1.length + arr2.length;
        let newArr = new Array(twoArrLength);
        for (let i = 0; i < twoArrLength; i++) {
            if (i < arr1.length) {
                newArr[i] = arr1[i];
            } else {
                newArr[i] = arr2[i - arr1.length];
            }
        }
        return newArr;
    };

    console.log(uniteArr(Motorcycles, Vehicles));
}());