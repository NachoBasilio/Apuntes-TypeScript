(()=>{
    const hero: [string, number, boolean] = ['Dr. Strange', 100, true];

    hero[0] = 'Ironman';
    hero[1] = 50;

    //Para typescript esto es un "tupla", pero en javascript es un arreglo. Lo que si hace TS es defender el tipo de dato que se le asigna a cada posición del arreglo.

})()