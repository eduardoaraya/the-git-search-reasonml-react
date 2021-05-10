'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var List$Project = require("./components/List/List.bs.js");
var Modal$Project = require("./components/Modal/Modal.bs.js");
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
  var match$2 = React.useState(function () {
        return {
                avatar: "",
                username: "",
                url: "",
                date: "",
                followers: -1,
                following: -1,
                modal_opem: false
              };
      });
  var setDataModal = match$2[1];
  React.useEffect((function () {
          return (function (param) {
                    return Curry._1(setBodyStyle, (function (param) {
                                  return resultBg;
                                }));
                  });
        }), [listCards]);
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "body-wrapper",
                  style: {
                    background: match$1[0]
                  }
                }, React.createElement(Header$Project.make, {
                      setData: match[1]
                    }), React.createElement(Modal$Project.make, {
                      data: match$2[0],
                      reset: (function (param) {
                          return Curry._1(setDataModal, (function (param) {
                                        return {
                                                avatar: "",
                                                username: "",
                                                url: "",
                                                date: "",
                                                followers: -1,
                                                following: -1,
                                                modal_opem: false
                                              };
                                      }));
                        })
                    }), React.createElement("div", {
                      className: "content"
                    }, React.createElement(List$Project.make, {
                          cards: listCards,
                          dispatchViewMoreClick: setDataModal
                        }))), React.createElement("footer", {
                  className: "d-flex center align-center"
                }, "copyrights"));
}

var make = App;

exports.logoBg = logoBg;
exports.resultBg = resultBg;
exports.make = make;
/* react Not a pure module */
