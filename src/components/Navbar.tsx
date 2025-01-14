import React from "react";

import {
  Container,
  Logo,
  IconLink,
  CustomSwitch,
  Bar,
} from "../styles/NavStyled";

import logo from "../assets/Smartly.svg";
import YoutubeButton from "./Buttons/YoutubeButton";
import InstagramButton from "./Buttons/InstagramButton";
import LinkedinButton from "./Buttons/LinkedinButton";
import FacebookButton from "./Buttons/FacebookButton";

function Navbar({
  isDarkTheme,
  setIsDarkTheme,
}: {
  isDarkTheme: boolean;
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Função que troca entre os temas
  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo Smartly" />
      </Logo>
      <Bar>
        <IconLink href="https://www.instagram.com/smartly_brasil?igsh=MXNuM3dpbGszMXd0cg==">
          <InstagramButton />
        </IconLink>
        <IconLink href="https://www.linkedin.com/company/smartly-fabrica%C3%A7%C3%A3o-de-dispositivos-inteligentes-ltda/">
          <LinkedinButton />
        </IconLink>
        <IconLink href="https://youtube.com">
          <YoutubeButton />
        </IconLink>
        <IconLink href="https://facebook.com">
          <FacebookButton />
        </IconLink>
        <CustomSwitch checked={!isDarkTheme} onChange={toggleTheme} />
      </Bar>
    </Container>
  );
}
export default Navbar;
