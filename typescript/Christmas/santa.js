export class Santa {
    observers = [];
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    ringBell() {
        this.notifyAll("Der Weihnachtsmann hat die Glocke geläutet!");
    }
    notifyAll(message) {
        this.observers.forEach(o => o.update(message));
    }
}
