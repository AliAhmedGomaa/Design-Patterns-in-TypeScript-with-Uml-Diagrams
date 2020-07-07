import { IReciever } from "./IReciever";

export class Refrigirator implements IReciever{
    state: string = 'Off';

    On(): void {
        this.state = 'On';
        console.log('Refrigirator Is ' + this.state );
    }

    Off(){
        this.state = 'Off';
        console.log('Refrigirator Is ' + this.state );
    }
}
