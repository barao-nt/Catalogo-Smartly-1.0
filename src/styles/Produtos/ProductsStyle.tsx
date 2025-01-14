import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const Div = styled.div`
  background: linear-gradient(#fff, #e7e7e7);
  height: 370px;
  border-radius: 15px;
  margin: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LinkPgs = styled(Link)`
  color: #292929;
  font-size: 25px;
  text-decoration: none;
`;

export const ImageContainer = styled.div`
  height: 300px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
