'use strict';

var React = require("react");

function Header(Props) {
  return React.createElement("header", {
              className: "header"
            }, React.createElement("div", {
                  className: "header-area d-flex row align-center"
                }, React.createElement("div", {
                      className: "logo-header",
                      style: {
                        marginRight: "25px",
                        width: "75px"
                      }
                    }, React.createElement("img", {
                          alt: "logo",
                          src: "src/assets/logo.svg",
                          width: "100%"
                        })), React.createElement("div", {
                      className: "d-flex row",
                      style: {
                        flex: "1"
                      }
                    }, React.createElement("input", {
                          name: "name",
                          type: "text"
                        }), React.createElement("button", {
                          style: {
                            background: "#8C56C2",
                            height: "36px",
                            padding: "7px",
                            width: "36px",
                            borderRadius: "0px 4px 4px 0px",
                            boxShadow: "-2px 0px 4px rgba(0, 0, 0, 0.25)",
                            transform: "translate3d(-22px,0,0)"
                          }
                        }, React.createElement("img", {
                              alt: "logo",
                              src: "src/assets/search.svg",
                              width: "100%"
                            })))));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
