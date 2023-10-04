import { Hero } from "./classes/Hero";
import { Villian } from "./classes/Villian";
import {genericFunctionArrow } from "./generics/generics";

// printObject({ name: "John", age: 30 })//Una funcion generica es una funcion que puede aceptar cualquier tipo de dato

// console.log(genericFunction("Hello World"));//TypeScript va a reaccionar al tipo de lo que mandemos, no como si no tuvieramos el tipado generico

// genericFunctionArrow("Hello World");//TypeScript va a reaccionar al tipo de lo que mandemos, no como si no tuvieramos el tipado generico

const deadpool = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villian>(deadpool))

