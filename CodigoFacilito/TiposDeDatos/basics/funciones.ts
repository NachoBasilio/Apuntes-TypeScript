const sayHi = (name) => {
    console.log(`Hi ${name}`);
}

function sayGoodbye(name) {
    console.log(`Goodbye ${name}`);
}

interface Person {
    name: string;
    age: number;
    isDeveloper: boolean;
}

const persona: Person = {name: "Jorge", age: 30, isDeveloper: true}

function sayHello({name, ...other}: Person) {
    console.log(`Hello ${name}`);
    console.log(`Age ${other.age}`);
}

sayHi("Jorge");
sayHello(persona);