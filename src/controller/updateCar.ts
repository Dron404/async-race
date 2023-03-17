import { CarData } from "../types/propsTypes";
import { GARAGE } from "./constants";

async function updateCar(car: CarData) {
  const { name, color } = car;
  const response = await fetch(`${GARAGE}/${car.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, color }),
  });
  return response.ok;
}

export default updateCar;
