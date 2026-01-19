export class Chancellor {
    country;
    constructor(country) {
        this.country = country;
    }
    update(message) {
        console.log(`Bundeskanzler (${this.country}): ${message}`);
    }
}
