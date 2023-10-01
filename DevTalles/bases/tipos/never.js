"use strict";
(function () {
    var abc = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 1; //
    };
    abc("Me ayuda mi persona?");
    //Son funciones para cuando no queremos que nuestro codigo siga ejecutándose luego de que se ejecute la función
})();
//# sourceMappingURL=never.js.map