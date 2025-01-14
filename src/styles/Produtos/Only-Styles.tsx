import { styled } from "styled-components";

//dispositivo superior
export const Disp = styled.div`
  background: #fff;
  width: 400px; //530
  height: 500px;
  border-radius: 15px;
  border: 3px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//imagem disp superior
export const ImageOne = styled.img`
  height: 350px;
`;

//button baixar manual
export const Button = styled.button`
  background: #fff;
  width: 410px; //530
  height: 40px;
  border-radius: 7px;
  border: 3px solid #f5f5f5;
  font-family: "Gilroy", sans-serif;
  font-weight: bold;
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//dispositivo e texto central
export const DuoInfo = styled.div`
  display: flex;
  gap: 5%;
`;

//dispositivo unico inferior
export const Middle = styled.div`
  display: flex;
  justify-content: center;
`;

//icon button baixar manual
export const Baixar = styled.img`
  margin: 4%;
`;

//escrita lateral direita
export const Expec = styled.div`
  margin-top: -5.5%;
`;

//titulo disp  (reve)
export const Line = styled.div`
  display: flex;
  align-items: baseline;
`;
