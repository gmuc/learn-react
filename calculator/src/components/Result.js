import PropTypes from "prop-types";
import React from "react";

export default function Result(props) {
  let output = "===> Result ???";

  console.log("start Result props:", props);

  if (props.operator != "unknown") {
    output = (
      <div className="Result">
        Result:{" "}
        {props.number1 + props.operator + props.number2 + " = " + props.result}
      </div>
    );
  }

  return <div className="Result">{output}</div>;
}

Result.propTypes = {
  number1: PropTypes.number,
  number2: PropTypes.number,
  result: PropTypes.number,
  operator: PropTypes.string.isRequired
};
