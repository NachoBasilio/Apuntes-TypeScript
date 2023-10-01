"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var saludar = function (nombre) { return "Hola ".concat(nombre); };
    var salvarMundo = function () { return "El mundo est\u00E1 salvado!"; };
    //let myFunction:Function; recibe cualquier tipo de funcion
    //let myFunction:(a:number, b:number) => number; recibe solo funciones que reciban dos numeros y devuelvan un numero
    //let myFunction:(a:string) => string; recibe solo funciones que reciban un string y devuelvan un string
    //let myFunction:() => string; recibe solo funciones que no reciban nada y devuelvan un string
    var myFunction;
    myFunction = addNumber;
    console.log(myFunction(5, 5));
    myFunction = saludar;
    console.log(myFunction('Juan'));
    myFunction = salvarMundo;
    console.log(myFunction());
})();
//# sourceMappingURL=function-types.js.map