import { ENGANE } from "./constants";

async function startStopEngine(id: string, status: string) {
  const response = await fetch(`${ENGANE}?id=${id}&status=${status}`, {
    method: "PATCH",
  });
  const json = response.json();
  return json;
}

export default startStopEngine;
