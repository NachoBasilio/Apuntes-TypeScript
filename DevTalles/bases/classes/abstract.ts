(()=>{
    abstract class RiverPlatePlayer {
        constructor(
            public name: string,
            public age: number,
            public position: string,
            public goals?: number,
            private club: string = 'River Plate'
        ){}
    }

    const Franccecoli: RiverPlatePlayer = new RiverPlatePlayer('Enzo Franccecoli', 45, 'Midfielder', 3, "River Plate");
})()