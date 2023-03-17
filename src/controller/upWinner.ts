import { WINERS } from "./constants";

async function upWinner(obj: { id: number; time: number; wins: number }) {
  const upObj = { time: obj.time, wins: obj.wins };
  const response = await fetch(`${WINERS}/${obj.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(upObj),
  });
  const json = response.json();
  return json;
}

export default upWinner;
