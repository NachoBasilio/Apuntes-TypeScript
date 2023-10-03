(()=>{
    class RiverPlateDT {
        private static instance:RiverPlateDT;//Se crea una propiedad estatica de la clase, para que sea accesible desde el metodo estatico, sirve para crear una instancia de la clase
        private constructor (public name:string, public age:number) {}//El constructor privado es accesible solo dentro de la clase, se usa para crear metodos estaticos que retornen instancias de la clase

        static createDT(name:string, age:number): RiverPlateDT {
            if(age < 18) {
                throw new Error('El DT debe ser mayor de edad');
            }
            if(!RiverPlateDT.instance) {//Si no existe una instancia de la clase, se crea una
                RiverPlateDT.instance = new RiverPlateDT(name, age);//Se crea una instancia de la clase
            }

            return RiverPlateDT.instance;//Se retorna la instancia de la clase
        }

        changeName(name:string):void {
            this.name = name;
        }
    }

    const dt = RiverPlateDT.createDT('Marcelo Gallardo', 45);
    console.log(dt);

    dt.changeName('Napoleon');
    console.log(dt);

    //Este patron ya no se usa mucho, ya que se puede usar el patron singleton

})()