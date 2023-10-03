"use strict";
(() => {
    class Player {
        constructor(name, age, club, salary, playing, position) {
            this.name = name;
            this.age = age;
            this.club = club;
            this.salary = salary;
            this.playing = playing;
            this.position = position;
        }
        getSalary() {
            return this.salary;
        }
    }
})();
//# sourceMappingURL=main.js.map