"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 0 ? true : false;
    };
    Validations.validateDate = (date) => {
        return date < new Date() ? true : false;
    };
})(Validations || (Validations = {}));
Validations.validateText('Hello');
//# sourceMappingURL=main.js.map