"use strict";
(function () {
    var myCustomVariables = 'Nacho, IgnaDev, Aguará Guazú JavaScriptero';
    myCustomVariables = {
        nombre: 'Nacho',
        edad: 25,
        poderes: ['Programar', 'Cocinar']
    }; //Si impimimos el type de esta variable no va a decir "Hero" sino "object", esto es porque typescript no sabe que tipo de objeto es, para solucionar esto, podemos usar las uniones de tipos
})();
