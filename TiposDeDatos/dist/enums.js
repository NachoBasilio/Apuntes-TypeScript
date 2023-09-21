var Users;
(function (Users) {
    Users[Users["Admin"] = 0] = "Admin";
    Users[Users["User"] = 1] = "User";
    Users[Users["Guest"] = 2] = "Guest";
})(Users || (Users = {}));
var myUser = Users.User;
console.log(myUser); // 0
