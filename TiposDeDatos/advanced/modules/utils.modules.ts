export const PI = 3.14;


export const generadorDeIDs =()=>{
    return Math.random().toString();
}


export interface User{
    id: string;
    name: string;
}