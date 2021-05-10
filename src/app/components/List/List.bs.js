'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Card$Project = require("../Card/Card.bs.js");

function List(Props) {
  var cards = Props.cards;
  var dispatchViewMoreClick = Props.dispatchViewMoreClick;
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
                                dispatchViewMoreClick: dispatchViewMoreClick,
                                key: card.id
                              });
                  })));
}

var make = List;

exports.make = make;
/* react Not a pure module */
