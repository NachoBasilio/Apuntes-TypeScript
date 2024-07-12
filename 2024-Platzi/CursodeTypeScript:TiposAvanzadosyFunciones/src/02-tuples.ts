const prices: (number | string)[] = [2,3,1, "asd"]

prices.push(1)
prices.push("1")

const user: [string, number]= ["IgnaDev", 26]

user[1] = 2
user[0] = "Aguara Guazu"


const [username, edad] = user //Destructuramos una tupla, como un array.
console.log(username)
console.log(edad)
