'use strict';

var React = require("react");

function Card(Props) {
  return React.createElement("div", {
              style: {
                background: "#FFF",
                height: "273px",
                margin: "10px",
                width: "200px",
                borderRadius: "10px",
                boxShadow: "0px 0px 6px rgba(47, 37, 68, 0.25)"
              }
            });
}

var make = Card;

exports.make = make;
/* react Not a pure module */
