import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "The self-checkout just accused me of stealing my own groceries. " +
  "'Unexpected item in the bagging area.' The unexpected item is the bag I brought. " +
  "I scanned it, I paid for it, and now a robot is holding my milk hostage under a blinking red light " +
  "like I robbed the place. I'm not a thief. I'm just a man buying yoghurt at 9pm. Let me go home.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
