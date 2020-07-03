import { Animal } from "./Animal";

export class Rabbit implements Animal{

    printType(): void {
        console.log('I Am Rabbit');
    }
    
}