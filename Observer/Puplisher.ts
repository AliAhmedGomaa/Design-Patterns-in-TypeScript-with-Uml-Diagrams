import { IObservable } from "./Iobservable";
import { Iobserver } from "./Iobserver";
import { Subscriber } from "./Subscriber";

export class Publisher implements IObservable {
    private data!: number;
    subscribers: Subscriber[] = [];

    addObserver(...subs: Subscriber[]): void {
        this.subscribers.push(...subs);
    }

    removeObserver(subs: Subscriber): void {
        const subscriberToRemove = this.subscribers.indexOf(subs);
        this.subscribers.splice(subscriberToRemove, 1);
    }

    notify(): void {
        this.subscribers.forEach((subscriber)=>{
            subscriber.update();
        })
    }

    /////////////
    setState(value: number){
        this.data = value;
        this.notify();
    }

    getState(){
        return this.data;
    }


}