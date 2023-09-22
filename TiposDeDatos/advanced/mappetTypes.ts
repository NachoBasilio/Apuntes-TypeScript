interface Person{
    name: string;
    age: number;
}

interface GetPerson{
    getName: () => string;
    getAge: () => number;
}

interface User{
    name: string;
    age: number;
}

interface GetUser{
    getName: () => string;
    getAge: () => number;
}

type Getter<T> = {
    [Property in keyof T ]: () => T[Property];
}