import { Auto } from "./car";

// Objekt erstellen
const meinAuto = new Auto("BMW", 220, "V8", "Schwarz", 80, 4);

// Aktuelle Werte ausgeben
console.log("Marke:", meinAuto.getBrand());
console.log("Geschwindigkeit:", meinAuto.getSpeed(), "km/h");
console.log("Motor:", meinAuto.getEngine());
console.log("Farbe:", meinAuto.getColor());
console.log("Tankfüllung:", meinAuto.getFuelLevel(), "%");
console.log("Türen:", meinAuto.getDoors());

// ---- Objekt ändern ----
meinAuto.setSpeed(180);
meinAuto.setColor("Rot");
meinAuto.setEngine("Elektro");
meinAuto.setFuelLevel(100);

console.log("---- Nach Änderung ----");
console.log("Neue Geschwindigkeit:", meinAuto.getSpeed(), "km/h");
console.log("Neue Farbe:", meinAuto.getColor());
console.log("Neuer Motor:", meinAuto.getEngine());
console.log("Tankfüllung:", meinAuto.getFuelLevel(), "%");
