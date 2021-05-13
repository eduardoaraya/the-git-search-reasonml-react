'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Actions$Project = require("../../actions/Actions.bs.js");

function Card(Props) {
  var card = Props.card;
  var dispatch = Props.dispatch;
  console.log(card);
  var handleViewMoreClick = function (param) {
    return Curry._1(dispatch, {
                type_: /* MoreInfo */1,
                payload: {
                  cards: [],
                  modal: {
                    id: card.id,
                    avatar: card.avatar,
                    login: card.login,
                    username: card.username,
                    url: card.url,
                    date: card.date,
                    followers: card.followers,
                    following: card.following,
                    modal_opem: true,
                    avatar_url: card.avatar_url,
                    html_url: card.html_url,
                    score: card.score
                  }
                }
              });
  };
  return React.createElement("div", {
              className: "card",
              style: {
                background: "#FFF",
                margin: "15px",
                maxWidth: "295px",
                minWidth: "295px",
                borderRadius: "10px",
                boxShadow: "0px 0px 6px rgba(47, 37, 68, 0.25)",
                flex: "1"
              }
            }, React.createElement("div", {
                  className: "picture",
                  style: {
                    overflow: "hidden",
                    borderRadius: "10px 10px 0px 0px"
                  }
                }, React.createElement("img", {
                      src: card.avatar_url,
                      width: "100%"
                    })), React.createElement("div", {
                  className: "card-content"
                }, React.createElement("span", {
                      className: "card-name"
                    }, card.login), React.createElement("span", {
                      className: "card-profile"
                    }, React.createElement("a", {
                          className: "link",
                          href: card.html_url
                        }, card.html_url)), React.createElement("span", {
                      className: "card-score"
                    }, "Score: " + String(card.score)), React.createElement("button", {
                      className: "btn",
                      onClick: handleViewMoreClick
                    }, "Ver mais")));
}

var ApiGithub = Actions$Project.ApiGithub;

var jsToUser = Actions$Project.jsToUser;

var initialState = Actions$Project.initialState;

var reducer = Actions$Project.reducer;

var make = Card;

exports.ApiGithub = ApiGithub;
exports.jsToUser = jsToUser;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
