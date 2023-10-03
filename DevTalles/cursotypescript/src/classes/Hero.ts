import { Power, powers } from "../data/powers";

export class Hero {
    constructor(
        public name: string,
        public level: number,
        public powerId: number
    ){}

    get power():string   {
        return powers.find(power => power.id === this.powerId)?.name || "No power"
    }

}