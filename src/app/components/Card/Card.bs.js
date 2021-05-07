'use strict';

var React = require("react");

function Card(Props) {
  return React.createElement("div", {
              style: {
                background: "#DDD",
                height: "273px",
                margin: "12px",
                minWidth: "230px"
              }
            }, "Card");
}

var make = Card;

exports.make = make;
/* react Not a pure module */
