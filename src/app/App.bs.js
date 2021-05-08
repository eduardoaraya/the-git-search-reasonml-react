'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var List$Project = require("./components/List/List.bs.js");
var Header$Project = require("./components/Header/Header.bs.js");

var logoBg = "\n  center \n  center \n  no-repeat\n  url('src/assets/logo-bg.png')";

var resultBg = "\n  center \n  center/cover\n  no-repeat\n  fixed\n  url('src/assets/result-bg.png')";

function App(Props) {
  var match = React.useState(function () {
        return [];
      });
  var listCards = match[0];
  var match$1 = React.useState(function () {
        return logoBg;
      });
  var setBodyStyle = match$1[1];
  React.useEffect((function () {
          return (function (param) {
                    if (listCards.length !== 0) {
                      return Curry._1(setBodyStyle, (function (param) {
                                    return logoBg;
                                  }));
                    } else {
                      return Curry._1(setBodyStyle, (function (param) {
                                    return resultBg;
                                  }));
                    }
                  });
        }), [listCards]);
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "body-wrapper",
                  style: {
                    background: match$1[0]
                  }
                }, React.createElement(Header$Project.make, {
                      setData: match[1]
                    }), React.createElement("div", {
                      className: "content"
                    }, React.createElement(List$Project.make, {
                          cards: listCards
                        }))), React.createElement("footer", {
                  className: "d-flex center align-center"
                }, "copyrights"));
}

var make = App;

exports.logoBg = logoBg;
exports.resultBg = resultBg;
exports.make = make;
/* react Not a pure module */
