'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var List$Project = require("./components/List/List.bs.js");
var Modal$Project = require("./components/Modal/Modal.bs.js");
var Header$Project = require("./components/Header/Header.bs.js");
var Actions$Project = require("./actions/Actions.bs.js");

var logoBg = "\n  center \n  center \n  no-repeat\n  url('src/assets/logo-bg.png')";

var resultBg = "\n  center \n  center/cover\n  no-repeat\n  fixed\n  url('src/assets/result-bg.png')";

function App(Props) {
  var match = React.useReducer(Actions$Project.reducer, Actions$Project.initialState);
  var dispatch = match[1];
  var state = match[0];
  var match$1 = React.useState(function () {
        return [];
      });
  var match$2 = React.useState(function () {
        return logoBg;
      });
  var setBodyStyle = match$2[1];
  React.useEffect((function () {
          return (function (param) {
                    return Curry._1(setBodyStyle, (function (param) {
                                  return resultBg;
                                }));
                  });
        }), [match$1[0]]);
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "body-wrapper",
                  style: {
                    background: match$2[0]
                  }
                }, React.createElement(Header$Project.make, {
                      dispatch: dispatch
                    }), React.createElement(Modal$Project.make, {
                      dispatch: dispatch,
                      state: state
                    }), React.createElement("div", {
                      className: "content"
                    }, React.createElement(List$Project.make, {
                          cards: state.cards,
                          dispatch: dispatch
                        }))), React.createElement("footer", {
                  className: "d-flex center align-center"
                }, "copyrights"));
}

var ApiGithub = Actions$Project.ApiGithub;

var jsToUser = Actions$Project.jsToUser;

var initialState = Actions$Project.initialState;

var reducer = Actions$Project.reducer;

var make = App;

exports.ApiGithub = ApiGithub;
exports.jsToUser = jsToUser;
exports.initialState = initialState;
exports.reducer = reducer;
exports.logoBg = logoBg;
exports.resultBg = resultBg;
exports.make = make;
/* react Not a pure module */
