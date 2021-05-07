'use strict';

var React = require("react");
var Card$Project = require("../Card/Card.bs.js");

function List(Props) {
  return React.createElement("div", {
              className: "d-flex wrapper",
              style: {
                paddingTop: "35px",
                width: "100%"
              }
            }, React.createElement(Card$Project.make, {}), React.createElement(Card$Project.make, {}), React.createElement(Card$Project.make, {}), React.createElement(Card$Project.make, {}), React.createElement(Card$Project.make, {}));
}

var make = List;

exports.make = make;
/* react Not a pure module */
