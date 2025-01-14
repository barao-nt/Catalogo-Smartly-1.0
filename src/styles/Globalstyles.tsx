import { Link } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// //define a cor de fundo
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    width: 99%;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 70px;
  font-family: "Gilroy", sans-serif;
  font-weight: bold;
  display: flex;
`;

export const Subtitles = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 50px;
  font-family: "Gilroy", sans-serif;
  font-weight: bold;
`;

//ponto colorido da escrita
export const Point = styled.div`
  color: #5db2c9;
  font-size: 80px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 30px;
  font-family: "Gilroy", sans-serif;
`;

//button back
export const IconLink = styled.div`
  margin-right: 2.5%;
`;

//icon voltar, title e (ponto)
export const Top = styled.div`
  display: flex;
  align-items: center;
`;

//cor escrita superior (linkezin)
export const LinkColor = styled(Link)`
  color: #a3a3a3;
  font-size: 20px;
`;

//toda escrita superior
export const Up = styled.div`
  padding: 11dvw;
  padding-top: 3%;
  padding-block-end: 0%;
`;

//dispositivos
export const Div = styled.div`
  background: #fff;
  width: 530px;
  border-radius: 15px;
  margin: 3% 3%;
  border: 3px solid #f5f5f5;
`;

//parte inferior
export const Arrow = styled.div`
  background: #f5f5f5;
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 5px;
`;

//nome
export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 85%;
`;

//nome dispositivos
export const ID = styled.a`
  color: #292929;
  font-size: 25px;
  margin-left: 70px;
  font-family: "Gilroy", sans-serif;
`;

//link de endereço dispo
export const LinkPgs = styled(Link)`
  color: #292929;
`;

//div disp lado a lado
export const Duo = styled.div`
  display: flex;
  justify-content: center;
`;

//tamanho da imagem
export const Image = styled.img`
  margin: 15px;
  height: 250px;
`;

//imagem para os dispositivos
export const Dispo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// cor switch (figma) #787880
//background: linear-gradient(#fff, #e7e7e7);
//cor escritas #292929
//cor da borda #F5F5F5

//font-family: Gilroy-SemiBold;
