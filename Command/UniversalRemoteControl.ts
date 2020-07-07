import { ICommand } from "./ICommand";

export class UniversalRemoteControl{
    constructor(private command: ICommand){

    }

    turOn(){
        this.command.execute();
    }

    turOff(){
        this.command.unexecute();
    }
}