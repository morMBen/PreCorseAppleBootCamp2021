(function () {
    'use strict';
    let massege = '';
    for (let x = 1, y = 100; x <= y; x++) {
        if (Number.isInteger(x / 7) || String(x).indexOf('7') != -1) {
            massege += 'BOOM,';
        }
        else {
            (x < 100) ? massege += x + ',' : massege += x;
        }
    };
    console.log(massege);
}());
