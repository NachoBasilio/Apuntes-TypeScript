import { getPokemon } from "./generics/getPokemon";

getPokemon(2)
    .then((pokemon) => {
    console.log(pokemon.name);
    })
    .catch((error) => {
    console.log(error);
    })
    .finally(() => console.log("Pokemon Promise Finished"));