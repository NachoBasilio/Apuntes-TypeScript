(()=>{
    class avenger {
        constructor(nombre, equipo, nombreReal){
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
        }
    }

    class FlyingAvenger extends avenger {
        constructor(nombre, equipo, nombreReal){
            super(nombre, equipo, nombreReal);
            this.vuela = true;
        }
    }

    const antman = new avenger('Antman', 'Cap', 'Scott Lang');

    console.log(antman);

    const falcon = new FlyingAvenger('Falcon', 'Cap', 'Sam Wilson');

    console.log(falcon);
})()