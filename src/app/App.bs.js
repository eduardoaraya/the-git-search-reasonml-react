'use strict';

var React = require("react");
var List$Project = require("./components/List/List.bs.js");
var Header$Project = require("./components/Header/Header.bs.js");

function App(Props) {
  return React.createElement("div", undefined, React.createElement(Header$Project.make, {}), React.createElement("div", {
                  className: "content"
                }, React.createElement(List$Project.make, {})));
}

var make = App;

exports.make = make;
/* react Not a pure module */
