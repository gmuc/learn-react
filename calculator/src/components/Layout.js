import React from "react";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className="Background">
      <div className="Header">
        <div className="Title">Calculator V1.0</div>
      </div>

      <div className="Main">
        <div className="Container">{children}</div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};
