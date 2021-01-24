(function () {
    'use strict'

    let testArr1 = [1, 2, 3, 4, 5, 6];
    //let testArr2 = [1, 2, 3, 4, 5];

    function reverseNumber(arr) {
        let tempNum;
        for (let i = 0, j = arr.length - 1; i < arr.length / 2 && j != i; i++, j--) {
            tempNum = arr[j];
            arr[j] = arr[i];
            arr[i] = tempNum;
        }
        return arr;
    }
    console.log(reverseNumber(testArr1));

}());