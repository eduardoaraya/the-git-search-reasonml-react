'use strict';

var React = require("react");

function Modal(Props) {
  var data = Props.data;
  var reset = Props.reset;
  return React.createElement("div", {
              className: data.modal_opem ? "overlayer show" : "overlayer"
            }, React.createElement("div", {
                  className: "modal"
                }, React.createElement("div", {
                      className: "modal-content"
                    }, React.createElement("div", {
                          className: "d-flex row"
                        }, React.createElement("figure", {
                              className: "modal-picture"
                            }, React.createElement("img", {
                                  src: data.avatar,
                                  width: "100%"
                                })), React.createElement("div", {
                              className: "modal-info"
                            }, React.createElement("div", {
                                  className: "modal-info-header"
                                }, React.createElement("h1", undefined, data.username !== "" ? data.username : "...")), React.createElement("div", {
                                  className: "modal-info-body"
                                }, React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("p", undefined, "Username: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, data.username !== "" ? data.username : "..."))), React.createElement("li", undefined, React.createElement("p", undefined, "Cadastro: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, data.date !== "" ? data.date : "..."))), React.createElement("li", undefined, React.createElement("p", undefined, "Cadastro: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, data.url !== "" ? data.url : "...")))), React.createElement("ul", {
                                      className: "right"
                                    }, React.createElement("li", undefined, React.createElement("p", undefined, "Cadastro: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, data.following !== -1 ? String(data.following) : "..."))), React.createElement("li", undefined, React.createElement("p", undefined, "Cadastro: "), React.createElement("p", undefined, React.createElement("span", {
                                                  className: "modal-info-value"
                                                }, data.followers !== -1 ? String(data.followers) : "..."))))), React.createElement("div", {
                                  className: "modal-info-footer"
                                }, React.createElement("button", {
                                      className: "btn btn-void",
                                      onClick: reset
                                    }, "Fechar")))))));
}

var make = Modal;

exports.make = make;
/* react Not a pure module */
