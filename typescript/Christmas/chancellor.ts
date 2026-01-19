import type { Notify } from "./notify.js";

export class Chancellor implements Notify {
    constructor(private country: string) { }

    update(message: string): void {
        console.log(`Bundeskanzler (${this.country}): ${message}`);
    }
}
