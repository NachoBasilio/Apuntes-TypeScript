(()=>{
    function callBatman():void{
        //return 1; TypeScript se va a quejar porque no se puede retornar un valor en una función de tipo void
        console.log('Show Batman signal');
    }
    const a = callBatman();
    console.log(a);//undefined

    //funcion flecha void
    const callSuperman = ():void => {
        console.log('Show Superman signal');
    }
})()