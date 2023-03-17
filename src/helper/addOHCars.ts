import _ from "lodash";
import addCar from "../controller/addCar";
import { brands, model } from "./constsnts";

function addOHCars() {
  for (let i = 0; i < 100; i += 1) {
    const name = `${brands[_.random(brands.length - 1)]} ${
      model[_.random(model.length - 1)]
    }`;
    const color = `#${_.random(0, 999999)}`;
    addCar({ name, color });
  }
  return true;
}

export default addOHCars;
