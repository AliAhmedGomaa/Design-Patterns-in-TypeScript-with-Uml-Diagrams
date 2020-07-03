import { Animal } from "./Animal";

export class Cat implements Animal{

    printType(): void {
        console.log('I Am Cat');
    }
    
}