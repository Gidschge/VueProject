import { Controllable } from "./controllable";

export class Blind implements Controllable {
    start(): void {
        console.log("Blind is going up");
    }
}