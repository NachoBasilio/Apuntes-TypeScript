(()=>{
  const calcularTotal = (precios: number[]):number => {
    let total = 0
    precios.forEach((item) => {
      total += item
    })
    return total
  }



  const printTotal = (precios: number[]):void => {
    const rta = calcularTotal(precios)
    console.log(rta)
  }

  printTotal([1,2,3,4,5,6,7,8])

})()
