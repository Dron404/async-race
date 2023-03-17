/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import Select from "@mui/material/Select/Select";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { Button, FormControl } from "@mui/material";
import Links from "../components/links";
import { WinnerData } from "../types/propsTypes";
import { setStorge, storge } from "../helper/storge";
import getWinners from "../controller/getWinners";
import WinnerCar from "../components/WinnerCar";

function Winners() {
  const [state, setState] = useState({
    ...storge.winers,
  });

  const [cars, setCars] = useState([] as WinnerData[]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getWinners(state.page, state.sort, state.order).then((data) => {
      setCars(data.json);
      setTotalCount(data.totalCount);
    });
    setStorge({ ...storge, winers: { ...state } });
  }, [state]);

  const WinnerCars = cars.map((car, index) => (
    <WinnerCar car={car} key={car.id} order={index + 1} />
  ));

  return (
    <>
      <Links />
      <h2>Winners({totalCount})</h2>
      <h3>Page({state.page})</h3>
      <div style={{ display: "flex", gap: "30px" }}>
        <FormControl>
          <InputLabel id="sort">Sort by</InputLabel>
          <Select
            labelId="sort"
            id="sort"
            value={state.sort}
            label="Sort"
            onChange={(e) => setState({ ...state, sort: e.target.value })}
          >
            <MenuItem value="id">id</MenuItem>
            <MenuItem value="wins">wins</MenuItem>
            <MenuItem value="time">best time</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="order">order</InputLabel>
          <Select
            labelId="order"
            id="order"
            value={state.order}
            label="Sort"
            onChange={(e) => setState({ ...state, order: e.target.value })}
          >
            <MenuItem value="ASC">ASC</MenuItem>
            <MenuItem value="DESC">DESC</MenuItem>
          </Select>
        </FormControl>
        <Button
          disabled={state.page === 1}
          onClick={() => {
            setState({ ...state, page: state.page - 1 });
          }}
        >
          Prev
        </Button>
        <Button
          disabled={totalCount < 10 || totalCount <= 10 * state.page}
          onClick={() => {
            setState({ ...state, page: state.page + 1 });
          }}
        >
          Next
        </Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
        }}
      >
        <p>№</p>
        <p>id</p>
        <p>Image</p>
        <p>Name</p>
        <p>Wins</p>
        <p>Best time</p>
      </div>
      {WinnerCars}
    </>
  );
}

export default Winners;
