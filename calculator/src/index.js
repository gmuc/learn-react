import React from "react";
import ReactDOM from "react-dom";
import style from "./assets/style/calculator.css";

import Calculator from "./components/Calculator";
import Layout from "./components/Layout";

const greeting = "World";
const wert1 = "wert1???";
const wert2 = "wert2???";
const ergebnis = "ergebnis???";
const mountNode = document.getElementById("mount");
ReactDOM.render(
  <Layout>
    <Calculator
      greeting={greeting}
      wert1={wert1}
      wert2={wert2}
      ergebnis={ergebnis}
    />
  </Layout>,

  mountNode
);
