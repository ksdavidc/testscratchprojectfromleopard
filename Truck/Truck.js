/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Truck extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Truck-a", "./Truck/costumes/Truck-a.svg", {
        x: 173.6413034351145,
        y: 48.359999999999985
      }),
      new Costume("Truck-b", "./Truck/costumes/Truck-b.svg", {
        x: 173.6413034351145,
        y: 58.14
      }),
      new Costume("Truck-c", "./Truck/costumes/Truck-c.svg", {
        x: 173.67363114754104,
        y: 57.74000000000001
      })
    ];

    this.sounds = [new Sound("toy honk", "./Truck/sounds/toy honk.wav")];

    this.triggers = [];
  }
}
