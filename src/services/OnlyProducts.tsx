import {
  Arrow,
  Div,
  Dispo,
  Duo,
  IconLink,
  ID,
  Image,
  LinkColor,
  LinkPgs,
  Name,
  Point,
  Subtitles,
  Title,
  Text,
  Top,
  Up,
} from "../styles/Globalstyles";

import {
  Button,
  Baixar,
  Disp,
  DuoInfo,
  Expec,
  ImageOne,
  Line,
  Middle,
} from "../styles/Produtos/Only-Styles";

import next from "../assets/Icons/Arrow - Right.svg";
import BackArrowButton from "../components/Buttons/BackArrowButton";
import baixar from "../assets/Icons/Paper Download.svg";

import oitoum from "../assets/img-termostatos/801.png";
import oitodez from "../assets/img-termostatos/810.png";
import nove from "../assets/img-termostatos/900.png";
import noveoito from "../assets/img-termostatos/918.png";

function HF() {
  return (
    <div>
      <Up>
        <div>
          <LinkColor to="/">
            Produtos
            <LinkColor to="/termostatos">
              - Termostatos
              <LinkColor to="/HF"> - HF-801</LinkColor>
            </LinkColor>
          </LinkColor>
        </div>

        <Top>
          <IconLink>
            <BackArrowButton />
          </IconLink>

          <div>
            {/* Api */}
            <Title>HF-801</Title>
          </div>
        </Top>

        <DuoInfo>
          <div>
            <Disp>
              {/* Api */}
              <ImageOne src={oitoum} alt="" />
            </Disp>
            <div>
              <Button>
                Baixar Manual
                <Baixar src={baixar} alt="React baixar" />
              </Button>
            </div>
          </div>

          <Expec>
            <Subtitles>Funções</Subtitles>

            <Text>
              {" "}
              {/* Api */}
              <ul>
                <li>Controle de temperatura ambiente e piso</li>
                <li>Controle automático de luminosidade</li>
                <li>Possibilidade de controle simples por aplcativo</li>
                <li>Possibilidade de conexão com a internet</li>
              </ul>
            </Text>
          </Expec>
        </DuoInfo>
        <Line>
          <div>
            <Subtitles>Conheça os outros Modelos</Subtitles>
          </div>

          <div>
            <Point>.</Point>
          </div>
        </Line>
      </Up>
      <div>
        <Duo>
          <Div>
            <Dispo>
              {" "}
              {/* Api */}
              <Image src={oitodez} alt="HF-810" />
            </Dispo>
            <Arrow>
              <Name>
                {" "}
                {/* Api */}
                <ID>HF-810</ID>
              </Name>
              <LinkPgs to="/">
                <img src={next} alt="React next" />
              </LinkPgs>
            </Arrow>
          </Div>

          <Div>
            <Dispo>
              {" "}
              {/* Api */}
              <Image src={nove} alt="HF-900" />
            </Dispo>
            <Arrow>
              <Name>
                {" "}
                {/* Api */}
                <ID>HF-900</ID>
              </Name>
              <LinkPgs to="/">
                <img src={next} alt="React next" />
              </LinkPgs>
            </Arrow>
          </Div>
        </Duo>
        <Middle>
          <Div>
            <Dispo>
              {" "}
              {/* Api */}
              <Image src={noveoito} alt="HF-918" />
            </Dispo>
            <Arrow>
              <Name>
                {" "}
                {/* Api */}
                <ID>HF-918</ID>
              </Name>
              <LinkPgs to="/">
                <img src={next} alt="React next" />
              </LinkPgs>
            </Arrow>
          </Div>
        </Middle>
      </div>
    </div>
  );
}

export default HF;

{
  /*  TEXTO HF-810
   <li>Controle de temperatura ambiente e piso</li>
    <li>Conexão com a internet</li>
    <li>Controle por aplicativo</li>
    <li>Rotina semnal com até 8 periodos por dia</li>
    <li>Modo Rotina/Manual/Manual Temporário</li>
    <li>controle automático de luminosidade</li>
    <li>Aferição do sendor de temperatura via aplicativo</li>
    <li>Temperatura Celsius ou Fahrenheit</li>
    <li>Configurações gerias do aplicativo</li>
    <li>Informações sobre o dispositivo</li>
    <li>Modo viagem via aplicativo</li> */
}
{
  /*

<Text>  TEXTO HF-900
  <ul>
   <li>compatibilidade com a Alexa</li>
    <li>Relatório de consumo de energia</li>
    <li>Controle de termperatura ambiente e piso</li>
    <li>conexão com a internet</li>
    <li>Controle por aplicativo</li>
    <li>Rotina semanal com até 8 periodos por dia</li>
    <li>Modo Rotina/Manual/Manual Temporário</li>
    <li>Controle automático de luminosidade</li>
    <li>Aferição do sensor de temperatura via aplicativo</li>
    <li>Temperatura Celsiius ou Fahrenheit</li>
    <li>Configuração gerais via aplicativo</li>
    <li>Informações sobre o dispositivo</li>
    <li>Modo viagem via aplicativo</li>
  </ul>
</Text> */
}

//    TEXTO HF-918
//     <li>Compatibilidade com a Alexa</li>
//     <li>Relatório de consumo de energia</li>
//     <li>Notificações de consumo via aplicativo</li>
//     <li>Função espelhamento</li>
//     <li>Controle de carga remoto</li>
//     <li>Sensor de presença humana</li>
//     <li>Display LCD com menu e configurações</li>
//     <li>Aferição do sensor de temperatua via App/Display LCD</li>
//     <li>Medição de umidade do ambiente</li>
//     <li>Cadastro do dispositivo via QRCode no display LCD</li>
//     <li>Controle de termperatura ambiente e piso</li>
//     <li>conexão com a internet</li>
//     <li>Controle por aplicativo</li>
//     <li>Rotina semanal com até 8 periodos por dia</li>
//     <li>Modo Rotina/Manual/Manual Temporário</li>
//     <li>Controle automático de luminosidade</li>
//     <li>Aferição do sensor de temperatura via aplicativo</li>
//     <li>Temperatura Celsiius ou Fahrenheit</li>
//     <li>Configuração gerais via aplicativo</li>
//     <li>Informações sobre o dispositivo</li>
//     <li>Modo viagem via aplicativo</li>
