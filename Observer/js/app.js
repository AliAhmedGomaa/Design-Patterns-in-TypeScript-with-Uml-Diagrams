"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Puplisher_1 = require("./Puplisher");
var Subscriber_1 = require("./Subscriber");
var publisher = new Puplisher_1.Publisher();
var Subscriber1 = new Subscriber_1.Subscriber(publisher);
var Subscriber2 = new Subscriber_1.Subscriber(publisher);
var Subscriber3 = new Subscriber_1.Subscriber(publisher);
var Subscriber4 = new Subscriber_1.Subscriber(publisher);
publisher.addObserver(Subscriber1, Subscriber2, Subscriber3, Subscriber4);
publisher.setState(5);
publisher.setState(1);
