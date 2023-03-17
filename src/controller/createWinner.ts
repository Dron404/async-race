import { WINERS } from "./constants";

async function createWinner(obj: { id: number; time: number; wins: number }) {
  const response = await fetch(`${WINERS}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  const json = response.json();
  return json;
}

export default createWinner;
