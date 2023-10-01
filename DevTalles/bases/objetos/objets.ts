(()=>{
    let flash: {nombre:string, edad?:number, poderes:string[], getNombre?: () => string} ={//Definimos el tipo de dato que va a tener el objeto
        nombre: 'Barry Allen',
        edad: 24,
        poderes: ['Puede correr muy rápido', 'Viajar en el tiempo']
    }

    let superman: {nombre:string, edad?:number, poderes:string[], getNombre?: () => string} ={//Definimos el tipo de dato que va a tener el objeto
        nombre: 'Clark Kent',
        edad: 60,
        poderes: ['Puede volar', 'Super velocidad']
    }//Podemos definir esto de esta manera pero imaginemos que los dos objetos deben tener la misma firma, esto es un poco tedioso, para solucionar esto, podemos crear una interfaz

    //En typescript cuando definimos un objetos, luego si queremos editar sus propiedades, no podemos hacerlo, ya que typescript lo toma como un objeto inmutable, para solucionar esto, debemos definir las propiedades como opcionales, para que luego podamos editarlas
})()