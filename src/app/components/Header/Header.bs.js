'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Actions$Project = require("../../actions/Actions.bs.js");
var ApiGithub$Project = require("../../../services/ApiGithub.bs.js");

function Header(Props) {
  var dispatch = Props.dispatch;
  var match = React.useState(function () {
        return "";
      });
  var setText = match[1];
  var text = match[0];
  var handleClick = function (param) {
    if (text === "") {
      console.log("> result");
      return ;
    }
    ApiGithub$Project.ApiGithub.getList(text).then(function (res) {
          Curry._1(dispatch, {
                type_: /* Search */0,
                payload: {
                  cards: res.items,
                  modal: Actions$Project.initialState.modal
                }
              });
          return Promise.resolve(res.items);
        });
    
  };
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
                          type: "text",
                          onChange: (function ($$event) {
                              var value = $$event.target.value;
                              return Curry._1(setText, (function (param) {
                                            return value;
                                          }));
                            })
                        }), React.createElement("button", {
                          className: "btn",
                          style: {
                            height: "36px",
                            padding: "7px",
                            width: "36px",
                            borderRadius: "0px 4px 4px 0px",
                            boxShadow: "-2px 0px 4px rgba(0, 0, 0, 0.25)",
                            transform: "translate3d(-22px,0,0)"
                          },
                          onClick: handleClick
                        }, React.createElement("img", {
                              alt: "logo",
                              src: "src/assets/search.svg",
                              width: "100%"
                            })))));
}

var ApiGithub = Actions$Project.ApiGithub;

var initialState = Actions$Project.initialState;

var reducer = Actions$Project.reducer;

var make = Header;

exports.ApiGithub = ApiGithub;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
