(()=>{
    interface FutbolPlayer{//Las interfaces se parecen a los tipos de datos, y lo usamos para definir la estructura de un objeto
        name: string;
        age: number;
        club: string;
        salary: number;
        playing: boolean;
        position: string;
        getSalary: () => number;
        // history: {
        //     clubes: string[],
        //     years: number[]
        // } Esto no es recomendable, ya que no es una buena practica y dificulta la lectura del codigo
        history: history;
        getHistory?: () => string;//El signo de interrogacion hace que el metodo sea opcional
    }//Los tipos no pueden extenderse, las interfaces si

    interface history{//Las interfaces secundarias debajo de la principal, se pueden usar en la principal
        clubes: string[],
        years: number[]
    }

    const messiLiteral: FutbolPlayer = {//Se puede usar la interfaz como un tipo de dato
        name: 'Messi',
        age: 33,
        club: 'Barcelona',
        salary: 1000000,
        playing: true,
        position: 'Delantero',
        getSalary(){
            return this.salary;
        },
        history: {
            clubes: ['Barcelona', 'PSG'],
            years: [20, 21]
        }
    }

    class Player implements FutbolPlayer{//Tambien se puede usar la interfaz como una clase
        constructor(
            public name: string,
            public age: number,
            public club: string,
            public salary: number,
            public playing: boolean,
            public position: string,
            public history: history
        ){}
        getSalary(){
            return this.salary;
        }
        getHistory(){
            return `${this.name} ha jugado en ${this.history.clubes.length} clubes`
        }
    }

    const messi = new Player('Messi', 33, 'Barcelona', 1000000, true, 'Delantero', {
        clubes: ['Barcelona', 'PSG'],
        years: [20, 21]
    })



})()