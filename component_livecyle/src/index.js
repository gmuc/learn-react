import React from 'react';
import ReactDOM from 'react-dom';

import Taschenrechner from './Taschenrechner';

const greeting = 'World';
const wert1 = 'wert1???';
const wert2 = 'wert2???';
const ergebnis = 'ergebnis???';
const mountNode = document.getElementById('mount');
ReactDOM.render(
	<Taschenrechner
		greeting={greeting}
		wert1={wert1}
		wert2={wert2}
		ergebnis={ergebnis}
	/>,
	mountNode
);
