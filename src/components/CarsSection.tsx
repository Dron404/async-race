import React from "react";
import { CarData } from "../types/propsTypes";
import Car from "./car";

function CarsSection(props: {
  first: number;
  setFirst: (id: number) => void;
  race: boolean;
  data: CarData[];
  setSelectedCar: (val: CarData) => void;
  selectedCar: CarData;
  setUpdate: () => void;
}) {
  const {
    data,
    selectedCar,
    setUpdate,
    setSelectedCar,
    race,
    first,
    setFirst,
  } = props;
  const screenWidth = window.screen.width - 85;
  const cars =
    data.length > 0 ? (
      data.map((car: CarData) => (
        <Car
          setFirst={setFirst}
          first={first}
          race={race}
          screenWidth={screenWidth}
          key={car.id}
          car={car}
          selectedCar={selectedCar}
          setUpdate={setUpdate}
          setSelectedCar={setSelectedCar}
        />
      ))
    ) : (
      <div>
        <p>Empty...</p>
      </div>
    );
  return <section>{cars}</section>;
}

export default CarsSection;
