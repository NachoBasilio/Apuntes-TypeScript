"use strict";
(function () {
    var fullName = function (firstName, upper, lastName) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName.toUpperCase(), " ").concat(lastName || '');
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '');
        }
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
//# sourceMappingURL=arg-default.js.map