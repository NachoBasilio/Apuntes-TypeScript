(()=>{

    //let avengers: number = 123 si es un number me va a retar si le asigno un string o cualquier otra cosa
    //let avengers: string = 123 si es un string me va a retar si le asigno un number o cualquier otra cosa
    let avengers: any = 123
    let exists;
    let power;

    avengers = 'Dr. Strange'
    //console.log(avengers.charAt(0))
    console.log((avengers as string).charAt(0))


    avengers = 150.5555
    console.log(<number>avengers.toFixed(2))

    console.log(exists)
    console.log(power)

})()