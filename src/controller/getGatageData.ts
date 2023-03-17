import { CarData } from "../types/propsTypes";
import { GARAGE } from "./constants";

const getGarageData = async (page: number) => {
  const response = await fetch(`${GARAGE}?_page=${page}&_limit=7`);
  const json: CarData[] = await response.json();
  const totalCount = response.headers.get("X-Total-Count") as string;
  return { json, totalCount: +totalCount };
};

export default getGarageData;
