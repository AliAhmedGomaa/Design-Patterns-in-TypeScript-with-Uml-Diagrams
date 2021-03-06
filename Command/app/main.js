"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Refrigirator_1 = require("./Refrigirator");
var Lamp_1 = require("./Lamp");
var UniversalRemoteControl_1 = require("./UniversalRemoteControl");
var Command_1 = require("./Command");
var refrigirator = new Refrigirator_1.Refrigirator();
var lamp = new Lamp_1.Lamp();
var command = new Command_1.Command(lamp);
var remoteControl = new UniversalRemoteControl_1.UniversalRemoteControl(command);
remoteControl.turOn();
