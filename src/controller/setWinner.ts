import _ from "lodash";
import getWinner from "./getWinner";
import createWinner from "./createWinner";
import upWinner from "./upWinner";

async function setWinners(id: string, time: number) {
  const current = await getWinner(id);
  if (_.isEmpty(current)) {
    await createWinner({ id: Number(id), time: +time.toFixed(2), wins: 1 });
  } else {
    if (current.time > time) current.time = +time.toFixed(2);
    current.wins += 1;
    await upWinner(current);
  }
}

export default setWinners;
