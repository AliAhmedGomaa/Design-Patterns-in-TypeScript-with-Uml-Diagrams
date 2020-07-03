import { Publisher } from "./Puplisher"
import { Subscriber } from "./Subscriber";

const publisher = new Publisher();

const Subscriber1 = new Subscriber(publisher);
const Subscriber2 = new Subscriber(publisher);
const Subscriber3 = new Subscriber(publisher);
const Subscriber4 = new Subscriber(publisher);

publisher.addObserver(Subscriber1,Subscriber2,Subscriber3,Subscriber4);


publisher.setState(5);
publisher.setState(1);

