import { Dispo, Title } from "../styles/Globalstyles";
import {
  Cards,
  Div,
  LinkPgs,
  ImageContainer,
} from "../styles/Produtos/ProductsStyle";

import termo from "../assets/img-produtos/temostatos.png";
import paineis from "../assets/img-produtos/paineis.png";
import atuadores from "../assets/img-produtos/atuadores.png";

function testando() {
  return (
    <div>
      <Dispo>
        <Title>Nossos Termostatos</Title>
      </Dispo>
      <Cards>
        <Div>
          <ImageContainer>
            <img src={termo} alt="" />
          </ImageContainer>
          <div>
            <LinkPgs to="/termostatos">Termostatos</LinkPgs>
          </div>
        </Div>
        <Div>
          <ImageContainer>
            <img src={paineis} alt="" />
          </ImageContainer>
          <div>
            <LinkPgs to="/">Painéis de Cenários</LinkPgs>
          </div>
        </Div>
        <Div>
          <ImageContainer>
            <img src={atuadores} alt="" />
          </ImageContainer>
          <div>
            <LinkPgs to="/">Atuadores</LinkPgs>
          </div>
        </Div>
      </Cards>
    </div>
  );
}

export default testando;
