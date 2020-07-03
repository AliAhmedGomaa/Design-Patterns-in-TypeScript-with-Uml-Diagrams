import { Iobserver } from "./Iobserver";
import { Publisher } from "./Puplisher";

export class Subscriber implements Iobserver {

    constructor(public publisher: Publisher) {}

    update(): void {
        console.log('Iam Notified');
        console.log('New Number Is ' + this.publisher.getState());
    }

}