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
    }//Los tipos no pueden extenderse, las interfaces si

    interface history{//Las interfaces secundarias debajo de la principal, se pueden usar en la principal
        clubes: string[],
        years: number[]
    }

    class Player implements FutbolPlayer{
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
    }


})()