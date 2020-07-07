import { IReciever } from "./IReciever";

export class Lamp implements IReciever{
    state: string = 'Off';

    On(): void {
        this.state = 'On';
        console.log('Lamp Is ' + this.state );
    }

    Off(){
        this.state = 'Off';
        console.log('Lamp Is ' + this.state );
    }
}
