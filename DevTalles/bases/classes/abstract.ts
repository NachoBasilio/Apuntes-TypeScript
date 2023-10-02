(()=>{
    abstract class RiverPlatePlayer {//Las clases abstractas no se pueden instanciar, solo se pueden heredar
        constructor(
            public name: string,
            public age: number,
            public position: string,
            public goals?: number,
            private club: string = 'River Plate'
        ){}
    }

    class MediocampistasDeRiver extends RiverPlatePlayer {
        constructor(
            public name: string,
            public age: number,
            public position: string,
            public goals?: number,
            
        ){
            super(name, age, position, goals);
        }
    }


    const MarceloGallardo: MediocampistasDeRiver = new MediocampistasDeRiver('Marcelo Gallardo', 45, 'Midfielder', 3);
})()