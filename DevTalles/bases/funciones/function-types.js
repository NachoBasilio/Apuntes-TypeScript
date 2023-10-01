"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var saludar = function (nombre) { return "Hola ".concat(nombre); };
    var salvarMundo = function () { return "El mundo est\u00E1 salvado!"; };
    var myFunction;
    myFunction = addNumber;
    console.log(myFunction(5, 5));
    myFunction = saludar;
    console.log(myFunction('Juan'));
    myFunction = salvarMundo;
    console.log(myFunction());
})();
//# sourceMappingURL=function-types.js.map