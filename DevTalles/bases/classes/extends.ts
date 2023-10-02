(()=>{
    class FutbolPlayer {
        constructor(
            public name: string,
            public age: number,
            public position: string
        ){}

        protected getNameAndEge(): string{//Protected es como private pero se puede acceder desde las clases que heredan, private no se puede acceder desde las clases que heredan
            return `${this.name} - ${this.age}`;
        }
        get getNameAndEgePublic(): string{//Los getters nos deben devolver algo, no pueden ser void
            return `${this.name} - ${this.age}`;
        }
        set setNameAndEgePublic(name: string){// Los setters no deben devolver nada, deben ser void y nos ayudan a modificar el valor de una propiedad
            this.name = name;
        }
    }

    class RiverPlatePlayer extends FutbolPlayer {
        constructor(
            public name: string,
            public age: number,
            public position: string,
            public goals?: number,
            private club: string = 'River Plate'
        ){
            super(name, age, position);//Llamamos al constructor de la clase padre
        }

        private bio(){
            return `${this.name} has scored ${this.goals} goals`;
        }

    }

    const MarceloGallardo: RiverPlatePlayer = new RiverPlatePlayer('Marcelo Gallardo', 45, 'Midfielder', 3, "River Plate");
})