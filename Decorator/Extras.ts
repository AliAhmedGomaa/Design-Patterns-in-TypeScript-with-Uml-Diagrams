import { Beverage } from "./Beverage";

export abstract class Extras extends Beverage {
    abstract cost(): number;
}