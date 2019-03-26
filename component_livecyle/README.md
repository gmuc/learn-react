# Demo für Livecyclemethoden

In einer kleinen Taschenrecher WEB-App wird gezeigt wie man die Livecyclemethoden von Reat einsetzt.

Themen:

- Verwendung von componentWillMount
- Verwendung von componentDidMount
- Zugriff auf das DOM mit React refs

## Getting Started

### Installation

Folgende Schritte:

```
git clone https://github.com/gmuc/learn-react.git
cd learn-react/component_livecyle
npm install
npm run start
```

## Lessons

### Grundlagen

Livecyclemethoden gibt es nur bei KLassen-Komponenten.

### componentWillMount

Wird ausgeführt bevor die Komponente gerendert wird. Deshalb ist sie
gut geeignet hier Berechnungen von Werten vorzunehmen, die sich aus den Props bzw.
aus dem Status ergeben und die beim Rendering dargestellt werden sollen.

### componentDidMount

Wird ausgeführt nachdem die Komponente im DOM gemountet worden ist. Will man also
Änderungen am DOM vornehmen, die zu sehen sind, wäre hier die richtige Stelle.
Beispiele wären das Einfärben bestimmter Elemente oder die Veränderung des Fokus.

### React refs

Bei der Definition eines HTML Elements kann man über das Keyword ref eine Funktion
aufrufen, mit der man eine direkte DOM Referenz in der Komponente (hier this.button_plus) hinterlegt.

Achtung! Mit der Referenz nur die Erscheinung des Objekts manipulieren und nicht
die Daten, weil das viruelle DOM von React davon nichts merkt, d.h. die Daten
sind sonst weg.

```
<button
	ref={node => {
		this.button_plus = node;
	}}
	onClick={() => this.plus()} >
```

Ein guter Artikel zu dem Thema:
https://hackernoon.com/refs-in-react-all-you-need-to-know-fb9c9e2aebgerd81

## Built With

- [react](https://reactjs.org/) - als WEB-Framework

## Authors

- **Gerd Mucha 2019**

## License

This project is licensed under the MIT License - see the [LICENSE.md](../LICENSE.md) file for details
