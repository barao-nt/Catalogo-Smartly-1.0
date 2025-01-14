import {
  Arrow,
  Dispo,
  Div,
  Duo,
  IconLink,
  ID,
  Image,
  Subtitles,
  LinkColor,
  LinkPgs,
  Name,
  Point,
  Title,
  Text,
  Top,
  Up,
} from "../styles/Globalstyles";

import oitoum from "../assets/img-termostatos/801.png";
import oitodez from "../assets/img-termostatos/810.png";
import nove from "../assets/img-termostatos/900.png";
import novedezoito from "../assets/img-termostatos/918.png";

import next from "../assets/Icons/Arrow - Right.svg";
import BackArrowButton from "../components/Buttons/BackArrowButton";

function Termostatos() {
  return (
    <div>
      <Up>
        <div>
          <LinkColor to="/">
            Produtos <LinkColor to="/termostatos"> - Termostatos</LinkColor>
          </LinkColor>
        </div>

        <Top>
          <IconLink>
            <BackArrowButton />
          </IconLink>

          <div>
            {/* Api */}
            <Title>Nossos Termostatos</Title>
          </div>
          <div>
            <Point>.</Point>
          </div>
        </Top>

        <div>
          <Subtitles>Apresentação</Subtitles>

          <Text>
            {/* Api */}
            Um termostato é um dispositivo que controla a temperatura em um
            ambiente, como uma casa ou um escritório. Ele regula o sistema de
            aquecimento para manter a temperatura dentro de um intervalo
            desejado.
          </Text>
          <Text>
            Nossos termostatos modernos utilizam sensores e algoritimos para
            otimizar o uso de energia.
          </Text>
          <Text>
            Também podem ser controlados remotamente por meio de aplicativos em
            smartphones, isso permite que os usuários ajustem a temperatura
            mesmo quando não estão em casa, economizando energia.
          </Text>
          <Subtitles>Modelos</Subtitles>
        </div>
      </Up>

      <div>
        <Duo>
          <Div>
            <Dispo>
              {/* Api */}
              <Image src={oitoum} alt="HF-801" />
            </Dispo>
            <Arrow>
              <Name>
                {/* Api */}
                <ID>HF-801</ID>
              </Name>
              <LinkPgs to="/HF">
                <img src={next} alt="React next" />
              </LinkPgs>
            </Arrow>
          </Div>

          <Div>
            <Dispo>
              {/* Api */}
              <Image src={oitodez} alt="HF-810" />
            </Dispo>
            <Arrow>
              <Name>
                {/* Api */}
                <ID>HF-810</ID>
              </Name>
              <LinkPgs to="/">
                {/*endereçar nova pg */}
                <img src={next} alt="React next" />
              </LinkPgs>
            </Arrow>
          </Div>
        </Duo>

        <Duo>
          <Div>
            <Dispo>
              {/* Api */}
              <Image src={nove} alt="HF-900" />
            </Dispo>
            <Arrow>
              <Name>
                {/* Api */}
                <ID>HF-900</ID>
              </Name>
              <LinkPgs to="/">
                {/*endereçar nova pg */}
                <img src={next} alt="React next" />
              </LinkPgs>
            </Arrow>
          </Div>

          <Div>
            <Dispo>
              {/* Api */}
              <Image src={novedezoito} alt="HF-918" />
            </Dispo>
            <Arrow>
              <Name>
                {/* Api */}
                <ID>HF-918</ID>
              </Name>
              <LinkPgs to="/">
                {/*endereçar nova pg */}
                <img src={next} alt="React next" />
              </LinkPgs>
            </Arrow>
          </Div>
        </Duo>
      </div>
    </div>
  );
}

export default Termostatos;
