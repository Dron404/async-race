/* eslint-disable @typescript-eslint/no-unused-vars */
const getSpead = (
  response: { velocity: number; distance: number },
  screenWidth: number
) => {
  const time = Math.floor(response.distance / response.velocity);
  return `${time}`;
};

export default getSpead;
