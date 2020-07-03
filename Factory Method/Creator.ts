import { AnimalCreator } from "./AnimalCreator";
import { Animal } from "./Animal";
import { Rabbit } from "./Rabbit";
import { Cat } from "./cat";
import { Dog } from "./Dog";

export class Creator implements AnimalCreator {


    constructor(public type: number) {
        this.type = type;
    }

    animal!: Animal;

    create(): Animal {
        switch (this.type) {
            case 0:
                this.animal = new Cat;
                break;
            case 1:
                this.animal = new Dog;
                break;
            case 2:
                this.animal = new Rabbit;
                break;
        }
        return this.animal;
    }

}