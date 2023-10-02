(()=>{
    class RiverPlatePlayer {

        
        constructor(
            public name: string,
            public age: number,
            public position: string,
            public goals?: number,
            private club: string = 'River Plate'
        ){}

        static createPlayer(name: string, age: number, position: string, goals: number){
            return new RiverPlatePlayer(name, age, position, goals);
        }
    }

    const player = new RiverPlatePlayer('Juanfer', 27, 'Midfielder', 3, "Racing");
    console.log(player);

    RiverPlatePlayer.createPlayer('Borré', 25, 'Forward', 10);//Las propiedades Static solo se pueden acceder desde la clase
})()