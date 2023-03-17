/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Form } from "react-router-dom";
import Options from "../components/Options";
import CarsSection from "../components/CarsSection";
import Links from "../components/links";
import { CarData } from "../types/propsTypes";
import getGarageData from "../controller/getGatageData";
import { getStorge, storge, setStorge } from "../helper/storge";

function Garage() {
  getStorge();
  const [update, setUpdate] = useState(true);
  const [cars, setCars] = useState([] as CarData[]);
  const [selectedCar, setSelectedCar] = useState(storge.change);
  const [page, setPage] = useState(storge.page);
  const [totalCount, setTotaCount] = useState(0);
  const [race, toggleRace] = useState(false);
  const [first, setFirst] = useState(0);

  useEffect(() => {
    const up = {
      ...storge,
      race,
      first,
      change: selectedCar,
      page,
    };
    setStorge(up);
  }, [selectedCar, page, race, first]);

  useEffect(() => {
    if (update) {
      getGarageData(page).then((data) => {
        setCars(data.json);
        setTotaCount(data.totalCount);
      });
      setUpdate(false);
    }
  }, [update, page]);
  const mesage = first === 0 ? "none" : "block";
  const firstCar = cars.find((car) => +car.id === first) || { name: "" };
  return (
    <main style={{ marginTop: "30px" }}>
      <h1
        style={{
          fontSize: "40px",
          zIndex: "10",
          top: "50%",
          left: "30%",
          position: "absolute",
          display: `${mesage}`,
        }}
      >
        Winner is {firstCar.name}
      </h1>
      <Links />
      <Options
        toggleRace={(val: boolean) => {
          toggleRace(val);
          setFirst(0);
        }}
        selectedCar={selectedCar}
        setUpdate={() => setUpdate(true)}
        setSelectedCar={setSelectedCar}
      />
      <div style={{ marginTop: "30px" }}>
        <h3>
          Garage({totalCount}) Page({page})
        </h3>
        <CarsSection
          first={first}
          setFirst={(id: number) => setFirst(id)}
          race={race}
          data={cars}
          setSelectedCar={(val: CarData) => {
            if (val.id === selectedCar.id) {
              setSelectedCar({ id: "0", name: "", color: "#000000" });
            } else {
              setSelectedCar(val);
            }
          }}
          selectedCar={selectedCar}
          setUpdate={() => setUpdate(true)}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
            toggleRace(false);
            setSelectedCar({ id: "0", name: "", color: "#000000" });
            setFirst(0);
            setUpdate(true);
          }}
        >
          Prev
        </Button>
        <Button
          disabled={totalCount < 8 || totalCount <= 7 * page}
          onClick={() => {
            setPage(page + 1);
            toggleRace(false);
            setSelectedCar({ id: "0", name: "", color: "#000000" });
            setFirst(0);
            setUpdate(true);
          }}
        >
          Next
        </Button>
      </div>
    </main>
  );
}

export default Garage;
