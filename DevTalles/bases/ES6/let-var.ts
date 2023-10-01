(()=>{
    let river = "campeon"
    //No deberíamos usar var nunca mas, solo en casos muy puntuales
    console.log(river)

    const PityMartinez = "crack"
    //En JS se acostumbra usar constantes hasta que se necesite cambiar el valor

    const riverVsBoca = () => {
        console.log("Gano river 2 a 0, en la 'cancha' de boca, mejor dicho en la media cancha de boca")
    }
    riverVsBoca()
    //Usar const en las funciones es una buena practica ya que evita el hoisting
})()