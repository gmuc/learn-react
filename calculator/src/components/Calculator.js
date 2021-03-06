import React from "react";

import Result from "./Result.js";

export default class Taschenrechner extends React.Component {
  constructor(props) {
    super(props);

    //		wert1: this.props.wert1,
    //		wert2: this.props.wert2,

    this.state = {
      level: "unknown",
      operation: "unknown",
      greeting: this.props.greeting,
      wert1: 1,
      wert2: 2,
      resultval: 0,
      ergebnis: this.props.ergebnis
    };
  }

  resetGreeting() {
    this.setState({ greeting: "" });
  }

  updateGreeting(newvalue) {
    this.setState({
      greeting: newvalue
    });
  }

  resetWert1() {
    this.setState({ wert1: "" });
  }

  updateWert1(newvalue) {
    this.setState({
      wert1: newvalue
    });
  }

  resetWert2() {
    this.setState({ wert2: "" });
  }

  updateWert2(newvalue) {
    this.setState({
      wert2: newvalue
    });
  }

  resetErgebnis() {
    this.setState({ ergebnis: "" });
  }

  updateErgebnis(newvalue) {
    this.setState({
      ergebnis: newvalue
    });
  }

  plus() {
    const { wert1, wert2 } = this.state;

    let summe = Number(wert1) + Number(wert2);

    let gleichung = wert1 + " + " + wert2 + " = " + summe;

    this.setState({
      ergebnis: gleichung,
      operation: "+",
      resultval: summe
    });
  }

  minus() {
    const { wert1, wert2 } = this.state;

    let differenz = Number(wert1) - Number(wert2);

    let gleichung = wert1 + " - " + wert2 + " = " + differenz;
    this.setState({
      ergebnis: gleichung,
      operation: "+",
      resultval: differenz
    });
  }

  render() {
    console.log("start render");

    const { level, wert1, wert2, ergebnis, operation, resultval } = this.state;

    console.log(
      "end render operation: " +
        operation +
        ", " +
        level +
        ", " +
        wert1 +
        ", " +
        wert2 +
        ", " +
        ergebnis +
        ", " +
        operation +
        ", " +
        resultval +
        " state:",
      this.state
    );

    return (
      <div>
        Level:{level}
        <br />
        Wert1:{"  "}
        <input
          ref={node => {
            this.field_wert1 = node;
          }}
          onChange={event => {
            this.updateWert1(event.target.value);
            this.resetErgebnis();
          }}
          value={wert1}
        />
        {"  "}= {wert1}
        <br />
        <br />
        Wert2:{"  "}
        <input
          ref={node => {
            this.field_wert2 = node;
          }}
          onChange={event => {
            this.updateWert2(event.target.value);
            this.resetErgebnis();
          }}
          value={wert2}
        />
        {"  "}= {wert2}
        <br />
        <br />
        <button
          ref={node => {
            this.button_plus = node;
          }}
          onClick={() => this.plus()}
        >
          +
        </button>
        {"  "}
        <button
          ref={node => {
            this.button_minus = node;
          }}
          onClick={() => this.minus()}
        >
          -
        </button>
        <br />
        <Result
          number1={wert1}
          number2={wert2}
          result={resultval}
          operator="+"
        />
      </div>
    );
  }
  // Livecyclemethodes

  componentWillMount() {
    const { wert1, wert2 } = this.state;

    let sum = wert1 + wert2;

    console.log(
      "componentWillMount check & change Object values before component mount\nstart sum:" +
        sum +
        ":"
    );

    if (this.props.wert1 && this.props.wert2) {
      if (sum <= 10) {
        this.setState({
          level: "easy"
        });
      } else {
        this.setState({
          level: "normal"
        });
      }
    }
    //await sleep(10000);

    console.log("componentWillMount end");

    /* setTimeout(function() {
      console.log("componentWillMount ende");
    }, 10000); */
  }

  componentDidMount() {
    console.log("start componentDidMount");
    this.field_wert1.style.backgroundColor = "lightblue";
    this.field_wert2.style.backgroundColor = "lightgray";
    this.button_plus.style.backgroundColor = "yellow";
    this.button_minus.style.backgroundColor = "yellow";
  }
}
