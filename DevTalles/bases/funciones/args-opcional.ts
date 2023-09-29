(()=>{
    const fullName = (firstName: string, lastName?: string): string => {//Con el signo de interrogación indicamos que el argumento es opcional
        return `${firstName} ${lastName || 'No lastName'}`;
    }

    const name = fullName('Tony');
    console.log({name});
})()