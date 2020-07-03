import { Creator } from "./Creator";

const type = Math.floor (Math.random() * 3);

const myPet = new Creator(type);

 myPet.create().printType();

