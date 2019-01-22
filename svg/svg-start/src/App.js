import React from "react";
import ReactDOM from "react-dom";
import ReactSVG from "react-svg";
import * as situations from "./SvgMapper";

const App = () => {
  console.log("===> SVG: ", situations["first"]);

  return (
    <div>
      <p>My SVGs</p>
      <div>
        <ReactSVG
          src={situations["first"]}
          evalScripts="always"
          fallback={() => <span>SVG Error!</span>}
          loading={() => <span>SVG Loading</span>}
          onInjected={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            console.log(svg);
          }}
          renumerateIRIElements={false}
          svgStyle={{ width: 40 }}
          onClick={() => {
            console.log("wrapper onClick");
          }}
        />
      </div>
      <div>
        <ReactSVG
          src={situations["second"]}
          evalScripts="always"
          fallback={() => <span>SVG Error!</span>}
          loading={() => <span>SVG Loading</span>}
          onInjected={(error, svg) => {
            if (error) {
              console.error(error);
              return;
            }
            console.log(svg);
          }}
          renumerateIRIElements={false}
          svgStyle={{ width: 40 }}
          onClick={() => {
            console.log("wrapper onClick");
          }}
        />
      </div>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
