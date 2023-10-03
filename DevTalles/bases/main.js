"use strict";
(() => {
    const messiLiteral = {
        name: 'Messi',
        age: 33,
        club: 'Barcelona',
        salary: 1000000,
        playing: true,
        position: 'Delantero',
        getSalary() {
            return this.salary;
        },
        history: {
            clubes: ['Barcelona', 'PSG'],
            years: [20, 21]
        }
    };
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
        getHistory() {
            return `${this.name} ha jugado en ${this.history.clubes.length} clubes`;
        }
    }
    const messi = new Player('Messi', 33, 'Barcelona', 1000000, true, 'Delantero', {
        clubes: ['Barcelona', 'PSG'],
        years: [20, 21]
    });
})();
(() => {
    const addNumbersFunction = (a, b) => a + b;
    addNumbersFunction(1, 2);
})();
//# sourceMappingURL=main.js.map