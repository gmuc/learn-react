import React from "react";

export default class Taschenrechner extends React.Component {
  constructor(props) {
    super(props);

    //		wert1: this.props.wert1,
    //		wert2: this.props.wert2,

    this.state = {
      level: "unknown",
      greeting: this.props.greeting,
      wert1: 1,
      wert2: 2,
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
      ergebnis: gleichung
    });
  }

  minus() {
    const { wert1, wert2 } = this.state;

    let differenz = Number(wert1) - Number(wert2);

    let gleichung = wert1 + " - " + wert2 + " = " + differenz;
    this.setState({
      ergebnis: gleichung
    });
  }

  render() {
    console.log("start render");

    const { level, wert1, wert2, ergebnis } = this.state;

    console.log("end render");

    return (
      <div>
        Level:{level}
        <br />
        Wert1:{"  "}
        <input
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
          onChange={event => {
            this.updateWert2(event.target.value);
            this.resetErgebnis();
          }}
          value={wert2}
        />
        {"  "}= {wert2}
        <br />
        <br />
        <button onClick={() => this.plus()}>+</button>
        {"  "}
        <button onClick={() => this.minus()}>-</button>
        <br />
        <p>Ergebnis: {"  " + ergebnis}</p>
      </div>
    );
  }

  // Livecyclemethodes

  componentWillMount() {
    const { wert1, wert2 } = this.state;

    let sum = wert1 + wert2;

    console.log("componentWillMount start => wait 10 sec sum:" + sum + ":");

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

    console.log("componentWillMount ende");

    /* setTimeout(function() {
      console.log("componentWillMount ende");
    }, 10000); */
  }

  componentDidMount() {
    console.log("start componentDidMount");
  }
}
