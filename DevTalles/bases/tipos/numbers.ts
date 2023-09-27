(()=>{
    //let avengers; Este es un tipo de dato any y puede ser cualquier cosa

    let avengers:number = 5

    const villians:number = 2

    if(avengers > villians){
        console.log('We are safe')
    }else{
        console.log('We are doomed')
    }

    avengers = Number('55A')//NaN es un tipo de dato number
})()
