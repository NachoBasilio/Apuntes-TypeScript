"use strict";
(() => {
})();
(() => {
    class FutbolPlayer {
        constructor(name, age, position) {
            this.name = name;
            this.age = age;
            this.position = position;
        }
        getNameAndEge() {
            return `${this.name} - ${this.age}`;
        }
    }
    class RiverPlatePlayer extends FutbolPlayer {
        constructor(name, age, position, goals, club = 'River Plate') {
            super(name, age, position);
            this.name = name;
            this.age = age;
            this.position = position;
            this.goals = goals;
            this.club = club;
        }
        bio() {
            return `${this.name} has scored ${this.goals} goals`;
        }
    }
    const MarceloGallardo = new RiverPlatePlayer('Marcelo Gallardo', 45, 'Midfielder', 3, "River Plate");
});
//# sourceMappingURL=main.js.map