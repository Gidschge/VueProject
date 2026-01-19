import type { Notify } from "./notify.js";

export class God implements Notify {
    constructor(private name: string) { }

    update(message: string): void {
        console.log(`Gott ${this.name}: ${message}`);
    }
}
