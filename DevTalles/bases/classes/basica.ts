(()=>{
    class RiverPlatePlayer {

        
        constructor(
            public name: string,
            public age: number,
            public position: string,
            public goals?: number,
            private club: string = 'River Plate'
        ){}
    }

    const player = new RiverPlatePlayer('Juanfer', 27, 'Midfielder', 3, "Racing");
    console.log(player);

})()