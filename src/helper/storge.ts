import { Storge } from "../types/propsTypes";

const storge: Storge = {
  page: 1,
  create: {
    name: "",
    color: "#000000",
  },
  selectCar: 0,
  change: {
    id: "0",
    name: "",
    color: "#000000",
  },
  first: 0,
  race: false,
  winers: {
    page: 1,
    sort: "id",
    order: "ASC",
  },
};

function setStorge(obj: typeof storge) {
  Object.assign(storge, obj);
  localStorage.setItem("storge", JSON.stringify(obj));
}

function getStorge() {
  if (localStorage.length) {
    const obj = JSON.parse(localStorage.getItem("storge") as string);
    Object.keys(obj).forEach((key) => {
      storge[key] = obj[key];
    });
  }
}
export { storge, setStorge, getStorge };
