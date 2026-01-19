import { Controllable } from "./controllable";

export class Heater implements Controllable {

    start(): void {
        console.log("The heating is on");
    }
}