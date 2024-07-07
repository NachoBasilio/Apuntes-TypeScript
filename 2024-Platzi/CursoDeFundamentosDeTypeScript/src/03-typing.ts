(()=>{
  let myProductName = "Pikachu de peluche"//Como en JS, TypeScript infiere los tipos

  let myProductPrice = 2222 //En este caso infiere que es un numero

  myProductName = "Peluche de rengar"

  const myProductStock = 1000//No nos va a dejar cambiar ni de tipo ni de valor

  //En general es mejor usar el moto de inferencia y especificar tipos solo cuando sea necesario.


})()//Esto genera un scope local
