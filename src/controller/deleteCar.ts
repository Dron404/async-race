import { GARAGE } from "./constants";

async function deleteCar(id: string) {
  const resporse = await fetch(`${GARAGE}/${Number(id)}`, {
    method: "DELETE",
  });
  return resporse.ok;
}

export default deleteCar;
