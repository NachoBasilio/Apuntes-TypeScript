"use strict";
(() => {
    class Player {
        constructor(name, age, club, salary, playing, position, history) {
            this.name = name;
            this.age = age;
            this.club = club;
            this.salary = salary;
            this.playing = playing;
            this.position = position;
            this.history = history;
        }
        getSalary() {
            return this.salary;
        }
    }
})();
//# sourceMappingURL=main.js.map