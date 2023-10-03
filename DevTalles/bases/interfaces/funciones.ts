(()=>{
    interface addTwoNumbers{
        (a: number, b: number): number;//Se puede usar una interfaz como un tipo de dato de una funcion
    }

    const addNumbersFunction: addTwoNumbers = (a: number, b: number): number => a + b;

    addNumbersFunction(1, 2);
})()