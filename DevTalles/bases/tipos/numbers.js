"use strict";
(function () {
    //let avengers; Este es un tipo de dato any y puede ser cualquier cosa
    var avengers = 5;
    var villians = 2;
    if (avengers > villians) {
        console.log('We are safe');
    }
    else {
        console.log('We are doomed');
    }
    avengers = Number('55A'); //NaN es un tipo de dato number
})();
