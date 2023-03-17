import { WINERS } from "./constants";

async function deleteWinner(id: string) {
  await fetch(`${WINERS}/${id}`, {
    method: "DELETE",
  });
}

export default deleteWinner;
