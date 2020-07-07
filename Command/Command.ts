import { ICommand } from "./ICommand";
import { IReciever } from "./IReciever";

export class Command implements ICommand{
    
    constructor(private reciever: IReciever){}
    
    execute(): void {
        this.reciever.On();
    }

    unexecute(): void {
        this.reciever.Off();
    }
    
}