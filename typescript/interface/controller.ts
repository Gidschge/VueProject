import { Blind } from "./blind.ts"
import { Controllable } from "./controllable.ts";
import { Heater } from "./heater.ts"

class Controller {
    constructor(private device: Controllable) { }

    startDevice(): void {
        this.device.start();
    }
}

const b1: Blind = new Blind();
const h1: Heater = new Heater();
const controller: Controller = new Controller(b1);
controller.startDevice();

