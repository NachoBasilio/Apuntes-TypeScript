(()=>{
    const hero: string = 'Flash';

    function returnName(): string {//Esto indica el tipo de dato que va a retornar la función
        return hero;
    }

    const activateBatisignal = (): string => {//Esto indica el tipo de dato que va a retornar la función
        return 'Batiseñal activada';
    }

    const heroName = returnName();
})()