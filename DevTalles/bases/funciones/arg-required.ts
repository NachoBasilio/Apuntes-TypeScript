(()=>{
    const fullName = (firstName: string, lastName: string): string => {//definimos el tipo de dato que va recibir la función
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Tony', 'Stark');
    console.log({name});
})()