import { GARAGE } from "./constants";

async function addCar(car: { name: string; color: string }) {
  const response = await fetch(GARAGE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car),
  });
  return response.ok;
}

export default addCar;
