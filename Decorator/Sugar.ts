import { Beverage } from "./Beverage";

export class Sugar  {
    
    constructor(private bv: Beverage) {
    }

    cost(): number {
        return this.bv.cost() + 3;
    }

}