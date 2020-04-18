import React from "react";
import Header from "./components/header/header.component";
// import "./App.css";
import { GlobalStyle } from "./globals.styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header></Header>
    </div>
  );
}

export default App;
