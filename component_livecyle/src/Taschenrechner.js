import React from 'react';

export default class Taschenrechner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			greeting: this.props.greeting,
			wert1: this.props.wert1,
			wert2: this.props.wert2,
			ergebnis: this.props.ergebnis,
		};
	}

	resetGreeting() {
		this.setState({ greeting: '' });
	}

	updateGreeting(newvalue) {
		this.setState({
			greeting: newvalue,
		});
	}

	resetWert1() {
		this.setState({ wert1: '' });
	}

	updateWert1(newvalue) {
		this.setState({
			wert1: newvalue,
		});
	}

	resetWert2() {
		this.setState({ wert2: '' });
	}

	updateWert2(newvalue) {
		this.setState({
			wert2: newvalue,
		});
	}

	resetErgebnis() {
		this.setState({ ergebnis: '' });
	}

	updateErgebnis(newvalue) {
		this.setState({
			ergebnis: newvalue,
		});
	}

	plus() {
		const { wert1, wert2 } = this.state;

		let summe = Number(wert1) + Number(wert2);

		let gleichung = wert1 + ' + ' + wert2 + ' = ' + summe;

		this.setState({
			ergebnis: gleichung,
		});
	}

	minus() {
		const { wert1, wert2 } = this.state;

		let differenz = Number(wert1) - Number(wert2);

		let gleichung = wert1 + ' - ' + wert2 + ' = ' + differenz;
		this.setState({
			ergebnis: gleichung,
		});
	}

	render() {
		const { wert1, wert2, ergebnis } = this.state;
		return (
			<div>
				Wert1:{'  '}
				<input
					onChange={event => {
						this.updateWert1(event.target.value);
						this.resetErgebnis();
					}}
					value={wert1}
				/>
				{'  '}
				= {wert1}
				<br />
				<br />
				Wert2:{'  '}
				<input
					onChange={event => {
						this.updateWert2(event.target.value);
						this.resetErgebnis();
					}}
					value={wert2}
				/>
				{'  '}
				= {wert2}
				<br />
				<br />
				<button onClick={() => this.plus()}>+</button>
				{'  '}
				<button onClick={() => this.minus()}>-</button>
				<br />
				<p>Ergebnis: {'  ' + ergebnis}</p>
			</div>
		);
	}
}
