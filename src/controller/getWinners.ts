import { WINERS } from "./constants";

async function getWinners(page: number, sort: string, order: string) {
  const response = await fetch(
    `${WINERS}?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`
  );
  const json = await response.json();
  const totalCount = response.headers.get("X-Total-Count") as string;
  return { json, totalCount: +totalCount };
}

export default getWinners;
