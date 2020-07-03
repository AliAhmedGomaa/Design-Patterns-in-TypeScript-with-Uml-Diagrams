import { Tea } from "./Tea";
import { Sugar } from "./Sugar";
import { Milk } from "./Milk";


const t = new Tea;
const teaWithSugar = new Sugar(t);

console.log(teaWithSugar.cost());

const teaWithSugarAndMilk = new Milk(teaWithSugar);
console.log(teaWithSugarAndMilk.cost());

