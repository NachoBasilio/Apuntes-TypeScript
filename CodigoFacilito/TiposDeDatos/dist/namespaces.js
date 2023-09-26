var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        return User;
    }());
    DatabaseEntity.User = User;
})(DatabaseEntity || (DatabaseEntity = {}));
/// <reference path="namespaces.ts" />
var user = new DatabaseEntity.User("Jorge", 30);
console.log(user.name);
