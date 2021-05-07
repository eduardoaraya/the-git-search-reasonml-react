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
                        width: "130px"
                      }
                    }, React.createElement("img", {
                          alt: "logo",
                          src: "src/assets/logo.svg",
                          width: "100%"
                        })), React.createElement("div", {
                      className: "d-flex row"
                    }, React.createElement("div", undefined, React.createElement("input", {
                              name: "name",
                              type: "text"
                            })), React.createElement("button", undefined, "Search"))));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
