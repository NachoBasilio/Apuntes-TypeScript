(()=>{
  let myDynamicVar: any;//El any existe para hacer dinámico el tipado, podemos usarlo para cuando recién estamos comenzando a usar TS y no estamos muy seguros de los datos que nos van a llegar. Ademas hay librerías que no están tipadas.

  myDynamicVar = "Hola"
  const rta = (myDynamicVar as string).toLocaleUpperCase()//Con "as" podemos decir que tome la variable "como" de x tipo.
  console.log(rta)

  myDynamicVar = 1234;
  const res = (<number>myDynamicVar).toFixed()//Lo mismo que el as pero de otra manera.
})()
