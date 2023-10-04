
function PrintToConsole(constructorFn: Function) {
    console.log(constructorFn);
}


@PrintToConsole
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';

    constructor(public name: string, public type: string) {}


}