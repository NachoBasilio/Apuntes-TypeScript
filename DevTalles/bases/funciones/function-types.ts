(()=>{
    const addNumber = (a:number, b:number):number => a + b;
    const saludar = (nombre:string):string => `Hola ${nombre}`;
    const salvarMundo = ():string => `El mundo está salvado!`;


    //let myFunction:Function; recibe cualquier tipo de funcion
    //let myFunction:(a:number, b:number) => number; recibe solo funciones que reciban dos numeros y devuelvan un numero
    //let myFunction:(a:string) => string; recibe solo funciones que reciban un string y devuelvan un string
    //let myFunction:() => string; recibe solo funciones que no reciban nada y devuelvan un string

    let myFunction:Function

    myFunction = addNumber;

    console.log(myFunction(5,5));

    myFunction = saludar;
    console.log(myFunction('Juan'));

    myFunction = salvarMundo;
    console.log(myFunction());


})()