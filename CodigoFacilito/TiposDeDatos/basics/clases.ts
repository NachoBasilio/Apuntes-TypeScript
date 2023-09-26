class Animal {
    name: "generic animal"
    constructor() {

    }
    protected identity = "123456789"
    private age = 10
    sayHi() {
        console.log("Grrrr")
    }
}

const myAnimal: Animal = new Animal()
myAnimal.sayHi()


class Dog extends Animal {
    nam: "dog"
    type: "pastor aleman"
    constructor() {
        super()
    }
    sayHi() {
        console.log("Woof")
    }
}


//Interfaces vs Clases

//Las clases me construyen objetos y podemos tener dentro de ellas propiedades y métodos
//Las clases se puede extender 

class petClass{
    seyHi(){
        console.log("Hi")
    }
}

interface petInterface{
    sayHi: () => void
}

class Cat extends petClass{
}
//Extender no me obliga a implementar los métodos de la clase padre
