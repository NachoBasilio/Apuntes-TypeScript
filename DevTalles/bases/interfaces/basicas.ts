(()=>{
    interface FutbolPlayer{//Las interfaces se parecen a los tipos de datos, y lo usamos para definir la estructura de un objeto
        name: string;
        age: number;
        club: string;
        salary: number;
        playing: boolean;
        position: string;
        getSalary: () => number;
    }//Los tipos no pueden extenderse, las interfaces si

    class Player implements FutbolPlayer{
        constructor(
            public name: string,
            public age: number,
            public club: string,
            public salary: number,
            public playing: boolean,
            public position: string
        ){}
        getSalary(){
            return this.salary;
        }
    }


})()