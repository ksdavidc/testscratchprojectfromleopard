import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Frames from "./Frames/Frames.js";
import Truck from "./Truck/Truck.js";
import Ben from "./Ben/Ben.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Frames: new Frames({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 48,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Truck: new Truck({
    x: -65,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Ben: new Ben({
    x: 35,
    y: 5,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
