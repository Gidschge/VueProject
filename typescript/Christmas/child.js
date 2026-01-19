export class Child {
    name;
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`Kind ${this.name}: ${message}`);
    }
}
