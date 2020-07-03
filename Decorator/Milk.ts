import { Beverage } from "./Beverage";

export class Milk  {
    
    constructor(private bv: Beverage) {
    }

    cost(): number {
        return this.bv.cost() + 3;
    }

}