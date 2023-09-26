import { PI, User, generadorDeIDs } from "./utils.modules";

const myNumber = 10 - PI;

const persona : User = {
    id: generadorDeIDs(),
    name: "Jorge"
}