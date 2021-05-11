'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ApiGithub$Project = require("../../../services/ApiGithub.bs.js");

function Card(Props) {
  var card = Props.card;
  var dispatchViewMoreClick = Props.dispatchViewMoreClick;
  var handleViewMoreClick = function (param) {
    return Curry._1(dispatchViewMoreClick, (function (param) {
                  return {
                          avatar: card.avatar_url,
                          username: card.login,
                          url: card.html_url,
                          date: "",
                          followers: 100,
                          following: 100,
                          modal_opem: true
                        };
                }));
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
                    }, "Score: " + card.score), React.createElement("button", {
                      className: "btn",
                      onClick: handleViewMoreClick
                    }, "Ver mais")));
}

var ApiGithub = ApiGithub$Project.ApiGithub;

var make = Card;

exports.ApiGithub = ApiGithub;
exports.make = make;
/* react Not a pure module */
