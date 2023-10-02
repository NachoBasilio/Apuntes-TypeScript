(()=>{
    class RiverPlatePlayer {
        constructor(
            public name: string,
            public age: number,
            public position: string,
            public goals?: number,
        ){
            this.name = name;
            this.age = age;
            this.position = position;
            this.goals = goals;
        }

        static createPlayer(name: string, age: number, position: string, goals: number){
            return new RiverPlatePlayer(name, age, position, goals);
        }
    }

    const player = new RiverPlatePlayer('Juanfer', 27, 'Midfielder');
    console.log(player);

    RiverPlatePlayer.createPlayer('Borré', 25, 'Forward', 10);//Las propiedades Static solo se pueden acceder desde la clase
})()