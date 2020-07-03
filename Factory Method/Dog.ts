import { Animal } from "./Animal";

export class Dog implements Animal{

    printType(): void {
        console.log('I Am Dog');
    }
    
}