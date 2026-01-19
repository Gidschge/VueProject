import { Santa } from "./santa.js";
import { Child } from "./child.js";
import { God } from "./god.js";
import { Chancellor } from "./chancellor.js";

const santa = new Santa();

santa.subscribe(new Child("Mia"));
santa.subscribe(new Child("Noah"));
santa.subscribe(new God("Odin"));
santa.subscribe(new Chancellor("Österreich"));

santa.ringBell();
