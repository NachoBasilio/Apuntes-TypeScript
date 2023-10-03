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
    const messi = new Player('Messi', 33, 'Barcelona', 1000000, true, 'Delantero', {
        clubes: ['Barcelona', 'PSG'],
        years: [20, 21]
    });
})();
//# sourceMappingURL=main.js.map