import { Auto } from "./car.ts";

const meinAuto = new Auto("BMW", 280);
console.log(meinAuto.getBrand()); 
console.log(meinAuto.getSpeed()); 

meinAuto.setSpeed(120);
console.log(meinAuto.getSpeed()); 
