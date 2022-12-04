/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Frames extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Frames/costumes/costume1.svg", {
        x: 66.28072384106844,
        y: 7.952903032703375
      }),
      new Costume("costume2", "./Frames/costumes/costume2.svg", {
        x: 65.50584353879995,
        y: 7.952903032703375
      }),
      new Costume("costume3", "./Frames/costumes/costume3.svg", {
        x: 64.73095323653146,
        y: 7.952903032703375
      }),
      new Costume("costume4", "./Frames/costumes/costume4.svg", {
        x: 63.956062934262974,
        y: 8.469496567549015
      }),
      new Costume("costume5", "./Frames/costumes/costume5.svg", {
        x: 65.76414030622274,
        y: 10.503581970379429
      }),
      new Costume("costume6", "./Frames/costumes/costume6.svg", {
        x: 67.05563414333685,
        y: 12.247094172223285
      }),
      new Costume("costume7", "./Frames/costumes/costume7.svg", {
        x: 71.44668004618808,
        y: 17.18701701317036
      }),
      new Costume("costume8", "./Frames/costumes/costume8.svg", {
        x: 71.44668004618808,
        y: 17.18701701317036
      }),
      new Costume("costume9", "./Frames/costumes/costume9.svg", {
        x: 71.44668999999999,
        y: 30.78787279174435
      }),
      new Costume("costume10", "./Frames/costumes/costume10.svg", {
        x: 71.44669000000002,
        y: 31.82105986143563
      }),
      new Costume("costume11", "./Frames/costumes/costume11.svg", {
        x: 71.44669000000005,
        y: 33.11254369854973
      }),
      new Costume("costume12", "./Frames/costumes/costume12.svg", {
        x: 71.44669000000007,
        y: 37.28677538599152
      }),
      new Costume("costume13", "./Frames/costumes/costume13.svg", {
        x: 71.44668999999999,
        y: 39.86972883711408
      }),
      new Costume("costume14", "./Frames/costumes/costume14.svg", {
        x: 71.44669000000002,
        y: 44.92085574576694
      }),
      new Costume("costume15", "./Frames/costumes/costume15.svg", {
        x: 71.44669000000005,
        y: 50.490962073913295
      }),
      new Costume("costume16", "./Frames/costumes/costume16.svg", {
        x: 71.44669000000005,
        y: 50.490969287707856
      }),
      new Costume("costume17", "./Frames/costumes/costume17.svg", {
        x: 71.44669000000007,
        y: 54.32654862781661
      }),
      new Costume("costume18", "./Frames/costumes/costume18.svg", {
        x: 71.4466900000001,
        y: 57.31278672856568
      }),
      new Costume("costume19", "./Frames/costumes/costume19.svg", {
        x: 71.44669000000013,
        y: 63.17607298896169
      }),
      new Costume("costume20", "./Frames/costumes/costume20.svg", {
        x: 71.44669000000016,
        y: 66.55972023787362
      }),
      new Costume("costume21", "./Frames/costumes/costume21.svg", {
        x: 71.44669000000019,
        y: 70.75542829599304
      }),
      new Costume("costume22", "./Frames/costumes/costume22.svg", {
        x: 71.44669000000022,
        y: 74.27441868189506
      }),
      new Costume("costume23", "./Frames/costumes/costume23.svg", {
        x: 72.09555740071073,
        y: 81.67439444429745
      }),
      new Costume("costume24", "./Frames/costumes/costume24.svg", {
        x: 72.98921010628356,
        y: 89.64362306357913
      }),
      new Costume("costume25", "./Frames/costumes/costume25.svg", {
        x: 73.94674905421874,
        y: 98.1824136345125
      }),
      new Costume("costume26", "./Frames/costumes/costume26.svg", {
        x: 82.66383220911976,
        y: 104.44417576384458
      }),
      new Costume("costume27", "./Frames/costumes/costume27.svg", {
        x: 99.14045785223658,
        y: 108.42885716340547
      }),
      new Costume("costume28", "./Frames/costumes/costume28.svg", {
        x: 147.48513975517722,
        y: 110.70571516990242
      }),
      new Costume("costume29", "./Frames/costumes/costume29.svg", {
        x: 203.71707944355833,
        y: 111.84429621481505
      }),
      new Costume("costume30", "./Frames/costumes/costume30.svg", {
        x: 219.74684920263874,
        y: 111.84415347223845
      }),
      new Costume("costume31", "./Frames/costumes/costume31.svg", {
        x: 243.79153282563436,
        y: 111.84416072966184
      }),
      new Costume("costume32 d", "./Frames/costumes/costume32 d.svg", {
        x: 234.85890789329312,
        y: 110.02977877245533
      }),
      new Costume("costume32 d2", "./Frames/costumes/costume32 d2.svg", {
        x: 343.641305,
        y: 110.02983873396502
      }),
      new Costume("costume32 d3", "./Frames/costumes/costume32 d3.svg", {
        x: 317.64131499999996,
        y: 110.02983869547472
      }),
      new Costume("costume32 d4", "./Frames/costumes/costume32 d4.svg", {
        x: 282.64131499999996,
        y: 110.02983865698442
      }),
      new Costume("costume32 d5", "./Frames/costumes/costume32 d5.svg", {
        x: 238.64131499999996,
        y: 110.02983861849413
      }),
      new Costume("costume32 d6", "./Frames/costumes/costume32 d6.svg", {
        x: 234.85891671874995,
        y: 110.02983858000383
      }),
      new Costume("costume32 d7", "./Frames/costumes/costume32 d7.svg", {
        x: 234.85890843749996,
        y: 110.02983854151353
      }),
      new Costume("costume32 d8", "./Frames/costumes/costume32 d8.svg", {
        x: 234.85891015624998,
        y: 110.02983850302323
      }),
      new Costume("costume32 d9", "./Frames/costumes/costume32 d9.svg", {
        x: 234.858911875,
        y: 99.02983846453293
      }),
      new Costume("costume32 d10", "./Frames/costumes/costume32 d10.svg", {
        x: 234.85891359375,
        y: 92.02983842604263
      }),
      new Costume("costume32 d11", "./Frames/costumes/costume32 d11.svg", {
        x: 233.85891531250002,
        y: 46.02983838755233
      }),
      new Costume("costume32 d12", "./Frames/costumes/costume32 d12.svg", {
        x: 233.85890703125003,
        y: 46.02983834906203
      }),
      new Costume("costume32 d13", "./Frames/costumes/costume32 d13.svg", {
        x: 233.85890875000004,
        y: 46.02983831057173
      }),
      new Costume("costume32 d14", "./Frames/costumes/costume32 d14.svg", {
        x: 233.85891046875005,
        y: 46.029838272081435
      }),
      new Costume("costume32 d16", "./Frames/costumes/costume32 d16.svg", {
        x: 233.85891218750007,
        y: 31.029838233591136
      }),
      new Costume("costume32 d17", "./Frames/costumes/costume32 d17.svg", {
        x: 233.85891390625008,
        y: 26.029838195100837
      }),
      new Costume("costume32 d15", "./Frames/costumes/costume32 d15.svg", {
        x: 233.85891218750007,
        y: 46.029838233591136
      })
    ];

    this.sounds = [new Sound("Meow", "./Frames/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.numberOfCostumes = 48;

    this.watchers.numberOfCostumes = new Watcher({
      label: "Frames: number of costumes",
      style: "normal",
      visible: true,
      value: () => this.vars.numberOfCostumes,
      x: 245,
      y: 175
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = "" + 0 + "";
      this.vars.numberOfCostumes = this.costumeNumber;
      this.costumeNumber += 1;
      while (!(this.costumeNumber == this.vars.numberOfCostumes)) {
        yield* this.wait(0.05);
        this.costumeNumber += 1;
        yield;
      }
      yield* this.wait(5);
      yield;
    }
  }
}
