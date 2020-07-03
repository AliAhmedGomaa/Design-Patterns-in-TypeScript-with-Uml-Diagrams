"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Creator_1 = require("./Creator");
var type = Math.floor(Math.random() * 3);
var myPet = new Creator_1.Creator(type);
myPet.create().printType();
