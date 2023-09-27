(()=>{
    const batman:string = "Batman";
    const linternaVerde:string = "Linterna Verde";

    console.log(batman.toUpperCase())
    console.log(linternaVerde.toLowerCase())
    console.log(`Los héroes son: ${batman} y ${linternaVerde}`)

    console.log(batman[10]?.toUpperCase())//? significa que si no existe el elemento no lo ejecute
})()