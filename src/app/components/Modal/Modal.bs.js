'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Actions$Project = require("../../actions/Actions.bs.js");

function Modal(Props) {
  var dispatch = Props.dispatch;
  var state = Props.state;
  console.log(state);
  var close = function (param) {
    return Curry._1(dispatch, {
                type_: /* Close */2,
                payload: {
                  cards: state.cards,
                  modal: state.modal
                }
              });
  };
  return React.createElement("div", {
              className: state.modal.modal_opem ? "overlayer show" : "overlayer"
            }, React.createElement("div", {
                  className: "modal"
                }, React.createElement("div", {
                      className: "modal-content"
                    }, React.createElement("div", {
                          className: "d-flex row"
                        }, React.createElement("figure", {
                              className: "modal-picture"
                            }, React.createElement("img", {
                                  src: state.modal.avatar_url,
                                  width: "100%"
                                })), React.createElement("div", {
                              className: "modal-info"
                            }, React.createElement("div", {
                                  className: "modal-info-header"
                                }, React.createElement("h1", undefined, state.modal.username !== "" ? state.modal.username : "...")), React.createElement("div", {
                                  className: "modal-info-body"
                                }, React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("p", undefined, "Username: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, state.modal.login !== "" ? state.modal.login : "..."))), React.createElement("li", undefined, React.createElement("p", undefined, "Data: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, state.modal.date !== "" ? state.modal.date : "..."))), React.createElement("li", undefined, React.createElement("p", undefined, "Cadastro: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, state.modal.html_url !== "" ? state.modal.html_url : "...")))), React.createElement("ul", {
                                      className: "right"
                                    }, React.createElement("li", undefined, React.createElement("p", undefined, "Following: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, state.modal.following !== -1 ? String(state.modal.following) : "..."))), React.createElement("li", undefined, React.createElement("p", undefined, "Followers: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, state.modal.followers !== -1 ? String(state.modal.followers) : "..."))))), React.createElement("div", {
                                  className: "modal-info-footer"
                                }, React.createElement("button", {
                                      className: "btn btn-void",
                                      onClick: close
                                    }, "Fechar")))))));
}

var ApiGithub = Actions$Project.ApiGithub;

var jsToUser = Actions$Project.jsToUser;

var initialState = Actions$Project.initialState;

var reducer = Actions$Project.reducer;

var make = Modal;

exports.ApiGithub = ApiGithub;
exports.jsToUser = jsToUser;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
