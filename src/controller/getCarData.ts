import { CarData } from "../types/propsTypes";
import { GARAGE } from "./constants";

async function getCarData(id: string) {
  const response = await fetch(`${GARAGE}/${id}`);
  const json = await response.json();
  return json as CarData;
}

export default getCarData;
