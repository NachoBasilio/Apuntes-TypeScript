"use strict";
(() => {
    class RiverPlatePlayer {
        constructor(name, age, position, goals, club = 'River Plate') {
            this.name = name;
            this.age = age;
            this.position = position;
            this.goals = goals;
            this.club = club;
        }
    }
    const player = new RiverPlatePlayer('Juanfer', 27, 'Midfielder', 3, "Racing");
    console.log(player);
})();
//# sourceMappingURL=main.js.map