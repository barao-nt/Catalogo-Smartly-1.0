import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { GlobalStyles } from "./styles/Globalstyles";

import light from "./styles/themes/Ligththeme";
import dark from "./styles/themes/Darktheme";

import Navbar from "./components/Navbar";
import Products from "./services/Products";
import Termostatos from "./services/InfoProducts";
import HF from "./services/OnlyProducts";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // Estado para controlar o tema
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Escolhe o tema com base no estado
  const theme = isDarkTheme ? dark : light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="termostatos" element={<Termostatos />} />
          <Route path="hf" element={<HF />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

//<Link to="/termostatos">Termostatos</Link>
