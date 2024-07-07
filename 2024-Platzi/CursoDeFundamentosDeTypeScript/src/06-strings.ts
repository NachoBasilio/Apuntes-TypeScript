(()=>{
  let productTitle = "Mi super producto"

  productTitle = "Mi super duper producto"
  console.log("ProductTitle: ", productTitle)

  const productDescriptio = 'Mi producto con comillas simples'
  console.log("ProductDescriptio: ", productDescriptio)

  const summary = `
    title: ${productTitle},
    description: ${productDescriptio}
  `
  console.log("Summary: ", summary)

})()
