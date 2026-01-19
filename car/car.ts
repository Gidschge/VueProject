export class Auto {
    // Kapselung (private Variablen)
    private brand: string;
    private speed: number = 0;
    private engine: string;
    private color: string;
    private fuelLevel: number;
    private doors: number;

    // Konstruktor
    constructor(brand: string, speed: number, engine: string, color: string, fuelLevel: number, doors: number) {
        this.brand = brand;
        this.setAndCheckSpeed(speed);
        this.engine = engine;
        this.color = color;
        this.fuelLevel = fuelLevel;
        this.doors = doors;
    }

    // Getter
    public getBrand(): string {
        return this.brand;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getEngine(): string {
        return this.engine;
    }

    public getColor(): string {
        return this.color;
    }

    public getFuelLevel(): number {
        return this.fuelLevel;
    }

    public getDoors(): number {
        return this.doors;
    }

    // Setter
    public setBrand(brand: string) {
        this.brand = brand;
    }

    public setSpeed(speed: number) {
        this.setAndCheckSpeed(speed);
    }

    public setEngine(engine: string) {
        this.engine = engine;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public setFuelLevel(fuelLevel: number) {
        if (fuelLevel > 100) this.fuelLevel = 100;
        else if (fuelLevel < 0) this.fuelLevel = 0;
        else this.fuelLevel = fuelLevel;
    }

    public setDoors(doors: number) {
        if (doors >= 2 && doors <= 5) {
            this.doors = doors;
        }
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
