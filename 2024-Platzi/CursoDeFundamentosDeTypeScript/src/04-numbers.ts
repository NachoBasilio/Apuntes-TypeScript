(()=>{
  let productPrice = 100
  productPrice = 150
  console.log("ProductPrice: ", productPrice)

  let customerAge: number = 26
  // customerAge = customerAge + "1" //261
  customerAge = customerAge + 2
  console.log("CostumerAge: ", customerAge)

  let productInStock: number//Aca tenemos que establecer el tipo si o si, porque no lo vamos a inicializar

  // console.log("ProductInStock: ", productInStock)
  // if(productInStock > 10){
  //   console.log("Tenemos mas de 10")
  // }
  //TypeScript nos analiza desde antes y nos salen errores si la variable no esta inicializada.

  let discount = parseInt("123")
  console.log("Discount: ", discount)

  let hex = 0xFFF
  console.log("Hex: ",hex)

  let bin = 0b0101010
  console.log("Bin: ", bin)
})()
