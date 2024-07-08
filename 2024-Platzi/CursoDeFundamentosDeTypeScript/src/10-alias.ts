(()=>{
  type UserID = string | number //Podemos crear nuestros propios tipos!
  let userId: UserID

  // Literal types
  type Tamaños = "M" | "L" | "XL"
  let shirtSize: Tamaños//Puedo decir que es lo que solo puede ser esta variable
  shirtSize = "M"
  shirtSize = "L"
  shirtSize = "XL"

  function saludar(userId: UserID, size: Tamaños){
    if(typeof userId === "string"){
      console.log(userId)
    } else {
      console.log(userId + 3)
    }
  }

  userId = "Perrito con chaucha"

  saludar(userId, "XL")

})()
