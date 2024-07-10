import { subDays, format } from 'date-fns'


const date = new Date(1998, 4, 19)
const rta = subDays(date, 30)

const date2 = new Date()
const rta2 = subDays(date2, 2)

const str = format(rta, "dd/MM/yyyy")
const str2 = format(rta2, "dd/MM/yyyy")

console.log(str2)
