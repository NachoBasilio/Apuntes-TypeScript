(()=>{
  let myDynamicVar: string | number;

  myDynamicVar = "Soy un string"


  myDynamicVar = 98

  function saludar(miTexto: string | number){
    if(typeof miTexto === "string"){
      console.log(miTexto)
    } else {
      console.log(miTexto + 3)
    }
  }

  saludar("Soy un string")
  saludar(2)
})()
