import { Input, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import addCar from "../controller/addCar";
import { CarData } from "../types/propsTypes";
import { DivCol, Form } from "./componentsStled";
import updateCar from "../controller/updateCar";
import addOHCars from "../helper/addOHCars";
import { storge, setStorge } from "../helper/storge";

function Options(props: {
  toggleRace: (val: boolean) => void;
  setUpdate: () => void;
  selectedCar: CarData;
  setSelectedCar: React.Dispatch<React.SetStateAction<CarData>>;
}) {
  const [newCar, setNewCar] = useState(storge.create);
  const newCarValid = newCar.name === "";
  const { setUpdate, selectedCar, setSelectedCar, toggleRace } = props;

  useEffect(() => {
    const up = {
      ...storge,
      create: newCar,
    };
    setStorge(up);
  }, [newCar]);

  return (
    <DivCol>
      <Form>
        <Input
          id="createCar"
          aria-describedby="my-helper-text"
          placeholder="Name"
          value={newCar.name}
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <input
          type="color"
          onChange={(e) => setNewCar({ ...newCar, color: e.target.value })}
          value={newCar.color}
        />
        <Button
          disabled={newCarValid}
          variant="contained"
          onClick={async () => {
            const response = await addCar(newCar);
            if (response) setUpdate();
            setNewCar({ name: "", color: "#000000" });
          }}
        >
          Create
        </Button>
      </Form>
      <Form>
        <Input
          disabled={selectedCar.name === ""}
          id="changeCar"
          aria-describedby="my-helper-text"
          placeholder="Change name"
          value={selectedCar.name || ""}
          onChange={(e) =>
            setSelectedCar({ ...selectedCar, name: e.target.value })
          }
        />
        <input
          disabled={selectedCar.name === ""}
          type="color"
          value={selectedCar.color || "#000000"}
          onChange={(e) =>
            setSelectedCar({ ...selectedCar, color: e.target.value })
          }
        />
        <Button
          disabled={selectedCar.name === ""}
          variant="contained"
          onClick={async () => {
            const response = await updateCar(selectedCar);
            if (response) setUpdate();
          }}
        >
          Change
        </Button>
      </Form>
      <Form>
        <Button onClick={() => toggleRace(true)} variant="contained">
          Race
        </Button>
        <Button onClick={() => toggleRace(false)} variant="contained">
          Reset
        </Button>
        <Button
          onClick={() => {
            const response = addOHCars();
            if (response) setUpdate();
          }}
          variant="contained"
        >
          +100 cars
        </Button>
      </Form>
    </DivCol>
  );
}
export default Options;
