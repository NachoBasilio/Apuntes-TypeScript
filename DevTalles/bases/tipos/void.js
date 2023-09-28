"use strict";
(function () {
    function callBatman() {
        //return 1; TypeScript se va a quejar porque no se puede retornar un valor en una función de tipo void
        console.log('Show Batman signal');
    }
    var a = callBatman();
    console.log(a); //undefined
    //funcion flecha void
    var callSuperman = function () {
        console.log('Show Superman signal');
    };
})();
