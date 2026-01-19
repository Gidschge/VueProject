import type { Notify } from "./notify.js";

export class Santa {
    private observers: Notify[] = [];

    subscribe(observer: Notify): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Notify): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    ringBell(): void {
        this.notifyAll("Der Weihnachtsmann hat die Glocke geläutet!");
    }

    private notifyAll(message: string): void {
        this.observers.forEach(o => o.update(message));
    }
}
