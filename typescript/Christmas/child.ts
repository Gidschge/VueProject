import type { Notify } from "./notify.js";

export class Child implements Notify {
    constructor(private name: string) { }

    update(message: string): void {
        console.log(`Kind ${this.name}: ${message}`);
    }
}
