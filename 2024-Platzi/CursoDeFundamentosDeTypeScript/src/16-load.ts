//var _ = require('lodash')

import _ from 'lodash'//TS tiene modulos para algunas librerias que no son pensadas para TS

const date = [
  {
    username: "Nacho",
    role: "Admin"
  },
  {
    username: "Rengar",
    role: "Capo"
  },
  {
    username: "Luca",
    role: "Capo"
  },
  {
    username: "Julian",
    role: "Vendedor"
  }
]

const rta = _.groupBy(date, (item)=>{return item.role})

console.log(rta)
