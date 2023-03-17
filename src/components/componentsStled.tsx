import styled from "@emotion/styled";

const CarDrive = styled.div`
  height: 25px;
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;

const DivBorder = styled.div`
  border-bottom: 3px dashed #000000;
`;

const Img = styled.img`
  position: absolute;
  right: 90px;
  width: 40px;
`;

const DivCol = styled.div`
  display: flex;
  flex-direction: column;
  //width: 500px;
  gap: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export { DivCol, Form, Img, DivBorder, CarDrive };
