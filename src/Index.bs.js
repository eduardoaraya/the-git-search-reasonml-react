'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$Project = require("./app/App.bs.js");
var ResetStyle$Project = require("./ResetStyle.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ResetStyle$Project.style;

ReactDom.render(React.createElement(App$Project.make, {}), document.getElementById("app"));

exports.style = style;
/* style Not a pure module */
