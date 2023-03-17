import { ENGANE } from "./constants";

async function switchEngine(id: string) {
  const response = await fetch(`${ENGANE}?id=${id}&status=drive`, {
    method: "PATCH",
  });
  return response.ok;
}

export default switchEngine;
