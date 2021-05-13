'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Card$Project = require("../Card/Card.bs.js");
var Actions$Project = require("../../actions/Actions.bs.js");

function List(Props) {
  var cards = Props.cards;
  var dispatch = Props.dispatch;
  return React.createElement("div", {
              className: "d-flex wrapper",
              id: "card-list",
              style: {
                margin: "0 auto",
                padding: "35px 0px",
                width: "100%"
              }
            }, Belt_Array.map(cards, (function (card) {
                    return React.createElement(Card$Project.make, {
                                card: card,
                                dispatch: dispatch,
                                key: String(card.id)
                              });
                  })));
}

var ApiGithub = Actions$Project.ApiGithub;

var jsToUser = Actions$Project.jsToUser;

var initialState = Actions$Project.initialState;

var reducer = Actions$Project.reducer;

var make = List;

exports.ApiGithub = ApiGithub;
exports.jsToUser = jsToUser;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
