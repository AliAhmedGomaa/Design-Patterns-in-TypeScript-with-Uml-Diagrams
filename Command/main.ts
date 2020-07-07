import { Refrigirator } from "./Refrigirator";
import { Lamp } from "./Lamp";
import { UniversalRemoteControl } from "./UniversalRemoteControl";
import { Command } from "./Command";


const refrigirator = new Refrigirator();
const lamp = new Lamp();

const command = new Command(lamp);


const remoteControl = new UniversalRemoteControl(command);

remoteControl.turOn();
