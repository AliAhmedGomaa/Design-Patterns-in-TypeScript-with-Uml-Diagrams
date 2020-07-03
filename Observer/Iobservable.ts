import { Iobserver } from "./Iobserver";

export interface IObservable {
    addObserver(...obs: Iobserver[]): void;
    removeObserver(obs: Iobserver): void;
    notify(): void;
}