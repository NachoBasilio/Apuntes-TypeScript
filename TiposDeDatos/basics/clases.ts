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