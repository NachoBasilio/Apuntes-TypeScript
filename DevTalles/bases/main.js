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
    class MediocampistasDeRiver extends RiverPlatePlayer {
        constructor(name, age, position, goals) {
            super(name, age, position, goals);
            this.name = name;
            this.age = age;
            this.position = position;
            this.goals = goals;
        }
    }
    const MarceloGallardo = new MediocampistasDeRiver('Marcelo Gallardo', 45, 'Midfielder', 3);
})();
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
        get getNameAndEgePublic() {
            return `${this.name} - ${this.age}`;
        }
        set setNameAndEgePublic(name) {
            this.name = name;
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
(() => {
    class RiverPlateDT {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        static createDT(name, age) {
            if (age < 18) {
                throw new Error('El DT debe ser mayor de edad');
            }
            if (!RiverPlateDT.instance) {
                RiverPlateDT.instance = new RiverPlateDT(name, age);
            }
            return RiverPlateDT.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const dt = RiverPlateDT.createDT('Marcelo Gallardo', 45);
    console.log(dt);
    dt.changeName('Napoleon');
    console.log(dt);
})();
//# sourceMappingURL=main.js.map