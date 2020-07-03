import { Animal } from "./Animal";

export interface AnimalCreator {
    create(): Animal;
}