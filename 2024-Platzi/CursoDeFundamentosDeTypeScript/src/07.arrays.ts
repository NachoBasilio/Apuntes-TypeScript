(()=>{
  const prices = [1,4,6,3,43,"Hola", true] //(string | number | boolean)[]
  const products = ["Hola", true] // (string | boolean)[]
  prices.push(23)
  products.push("Hola2")


  let mixed: (number | string | boolean)[] = ["Hola"]
  mixed.push(true)
  mixed.push(23)

  let number = [1,2,3,4,2,3]

  number.map(item => item * 2)

})()
