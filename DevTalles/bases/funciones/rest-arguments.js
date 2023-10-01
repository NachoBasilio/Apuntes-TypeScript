"use strict";
(function () {
    var fullName = function (fistName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(fistName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    var ironman = fullName('Anthony', 'Edward', 'Tony', 'Stark');
    console.log({ superman: superman, ironman: ironman });
})();
//# sourceMappingURL=rest-arguments.js.map