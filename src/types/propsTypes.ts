// type OptionsProps = {

// };

export type CarProps = {
  [key: string]: string;
  name: string;
  id: string;
  color: string;
};

export type CarData = {
  name: string;
  id: string;
  color: string;
  status?: string;
};

export type GetCarsResponse = {
  data: CarData[];
  totalCount: number;
};

export type EnginResponse = {
  velocity: number;
  distance: number;
};

export type Storge = {
  [key: string]: unknown;
  page: number;
  create: {
    name: string;
    color: string;
  };
  selectCar: number;
  change: {
    id: string;
    name: string;
    color: string;
  };
  first: number;
  race: boolean;
  winers: {
    page: number;
    sort: string;
    order: string;
  };
};

export type WinnerData = {
  id: number;
  wins: number;
  time: number;
};
