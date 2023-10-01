(()=>{
    type RiverPlateJugadores = {
        arquero: string,
        defensa: string,
        medio: string,
        delantero: string
    }

    const riverPlateJugadores: RiverPlateJugadores = {
        arquero: 'Armani',
        defensa: 'Gonzales Pires',
        medio: 'Enzo Perez',
        delantero: 'Borja'
    }

    const {arquero, defensa, medio, delantero} = riverPlateJugadores;
    //En JavaScript se puede desestructurar un objeto, es decir, extraer sus propiedades


    const printPlayers = ({arquero, ...resto}:RiverPlateJugadores)=>{
        console.log(arquero, resto)
    }

    printPlayers(riverPlateJugadores)


    const jugadoresArr = ['Armani', 'Gonzales Pires', 'Enzo Perez', 'Borja']

    const [arqueroArr, defensaArr, medioArr, delanteroArr] = jugadoresArr;

    console.log(arqueroArr, defensaArr, medioArr, delanteroArr)

})()