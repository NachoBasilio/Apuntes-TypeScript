(()=>{
    const fullName = (firstName: string, upper: boolean = false, lastName?: string ): string => {//definimos el tipo de dato que va recibir la función
        if (upper) {
            return `${firstName.toUpperCase()} ${lastName || ''}`;
        } else {
            return `${firstName} ${lastName || ''}`;
        }
    }

    const name = fullName('Tony');
    console.log({name});
})()