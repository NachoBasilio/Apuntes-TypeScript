import { subDays, format } from 'date-fns'


const date = new Date(1998, 4, 19)
const rta = subDays(date, 30)

const str = format(rta, "dd/MM/yyyy")

console.log(str)
