type Persona={
    name: string;
    age: number;
    isMarried: boolean;
    address: string;
    description?: string;
}

let persona: Persona = {
    name: "Juan",
    age: 25,
    isMarried: false,
    address: "Calle 123",
    description: "Persona de prueba"
}

type serviceResponse = string | number | boolean | Persona;

let response: serviceResponse 

type UserCharge = "Admin" | "User" | "Guest";

let myUser: UserCharge = "Admin";

type user = Persona & {charge: UserCharge};

let myUser2: user = {
    name: "Juan",
    age: 25,
    isMarried: false,
    address: "Calle 123",
    charge: "Admin"
}


