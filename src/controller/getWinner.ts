import { WINERS } from "./constants";

async function getWiner(id: string) {
  try {
    const response = await fetch(`${WINERS}/${id}`);
    const json = response.json();
    return await json;
  } catch (error) {
    return error;
  }
}

export default getWiner;
