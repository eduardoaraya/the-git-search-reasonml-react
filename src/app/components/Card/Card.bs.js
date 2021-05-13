'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Actions$Project = require("../../actions/Actions.bs.js");
var ApiGithub$Project = require("../../../services/ApiGithub.bs.js");

function Card(Props) {
  var card = Props.card;
  var dispatch = Props.dispatch;
  var handleViewMoreClick = function (param) {
    Curry._1(dispatch, {
          type_: /* MoreInfo */1,
          payload: {
            cards: [],
            modal: {
              id: card.id,
              name: card.name,
              avatar: card.avatar,
              login: card.login,
              url: card.url,
              created_at: "",
              followers: -1,
              following: -1,
              modal_opem: true,
              avatar_url: card.avatar_url,
              html_url: card.html_url,
              score: card.score
            }
          }
        });
    ApiGithub$Project.ApiGithub.getUser(card.login).then(function (res) {
          Curry._1(dispatch, {
                type_: /* LoadMoreInfo */3,
                payload: {
                  cards: [],
                  modal: {
                    id: res.id,
                    name: res.name,
                    avatar: res.avatar,
                    login: res.login,
                    url: res.url,
                    created_at: res.created_at,
                    followers: res.followers,
                    following: res.following,
                    modal_opem: true,
                    avatar_url: res.avatar_url,
                    html_url: res.html_url,
                    score: res.score
                  }
                }
              });
          return Promise.resolve(res);
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

var initialState = Actions$Project.initialState;

var reducer = Actions$Project.reducer;

var make = Card;

exports.ApiGithub = ApiGithub;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
