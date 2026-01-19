export class God {
    name;
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`Gott ${this.name}: ${message}`);
    }
}
