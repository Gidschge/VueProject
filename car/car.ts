export class Auto {
    // Kapselung
    // objektvariablen, instanzvariablen
    private brand: string;
    private speed: number = 0;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.setAndCheckSpeed(speed);
    }

    // Getter
    public getBrand(): string {
        return this.brand;
    }

    public getSpeed(): number {
        return this.speed;
    }

    // Setter
    public setBrand(brand: string) {
        this.brand = brand;
    }

    public setSpeed(speed: number) {
        this.setAndCheckSpeed(speed);
    }

    // Private Methode zur Kontrolle
    private setAndCheckSpeed(speed: number) {
        if (speed > 250) {
            this.speed = 250;
        } else if (speed < 0) {
            this.speed = 0;
        } else {
            this.speed = speed;
        }
    }
}
