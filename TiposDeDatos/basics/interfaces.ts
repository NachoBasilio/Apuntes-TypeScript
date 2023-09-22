interface Person {
    name: string;
    age: number | string;
    charge: string;
    isDeveloper: boolean;
    salary?: number;// Opcional
    sayHi?: () => string;// Opcional
    printHi: () => void;
}

let person: Person = {
    name: 'John',
    age: 30,
    charge: 'Frontend Developer',
    isDeveloper: true,
    salary: 1000,
    printHi: () => console.log('Hi')
}

person.age = '30 años';

let person2: Person = {
    name: 'Jane',
    age: '30 años',
    charge: 'Backend Developer',
    isDeveloper: true,
    printHi: () => console.log('Hi')
}

let person3: Person = {
    name: 'John',
    age: 30,
    charge: 'Frontend Developer',
    isDeveloper: true,
    salary: 1000,
    printHi: () => console.log('Hi')
}

let person4: Person = {
    name: 'Jane',
    age: '30 años',
    charge: 'Backend Developer',
    isDeveloper: true,
    sayHi: () => 'Hi',
    printHi: () => console.log('Hi')
}

interface Employee extends Person {
    id: number;
    department: string;
}

let employee: Employee = {
    name: 'John',
    age: 30,
    charge: 'Frontend Developer',
    isDeveloper: true, 
    salary: 1000,
    printHi: () => console.log('Hi'),
    id: 1,
    department: 'IT'
}



//Interfaces vs Clases

//las interfaces son solo un contrato esquelético
//Las interfaces no se pueden interpretar en JS


class petClass{
    seyHi(){
        console.log("Hi")
    }
}

interface petInterface{
    sayHi: () => void
}

class Dog implements petInterface{
    sayHi(){
        console.log("Woof")
    }
}
//Implementar me obliga a implementar los métodos de la interfaz