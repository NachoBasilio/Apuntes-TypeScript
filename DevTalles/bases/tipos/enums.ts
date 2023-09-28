(()=>{
    enum AudioLevel {//Se usa la palabra reservada enum y se le asigna un nombre con la primera letra en mayúscula
        //min,
        min=1,
        medium,//Este valor es el siguiente al anterior, es decir, 2
        //max
        max=10
    }

    let currentAudio = AudioLevel.medium;

    console.log(currentAudio);//1
})()