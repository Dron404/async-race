import React, { useEffect, useState } from "react";
import getCarData from "../controller/getCarData";
import { CarData, WinnerData } from "../types/propsTypes";
import { ReactComponent as CarSvg } from "../assets/car.svg";

function WinnerCar(props: { car: WinnerData; key: number; order: number }) {
  const { car, order, key } = props;
  const { wins, time, id } = car;
  const [carData, setCarData] = useState({ name: "", color: "" } as CarData);
  useEffect(() => {
    getCarData(String(id)).then((data) => setCarData({ ...data }));
  }, [id]);
  return carData.name === "" ? (
    <p>Loding...</p>
  ) : (
    <div
      id={String(key)}
      style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}
    >
      <p>{order}</p>
      <p>{id}</p>
      <CarSvg width="60px" height="40px" fill={carData.color} />
      <p>{carData.name}</p>
      <p>{wins}</p>
      <p>{time}</p>
    </div>
  );
}

export default WinnerCar;
