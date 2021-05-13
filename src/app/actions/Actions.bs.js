'use strict';

var ApiGithub$Project = require("../../services/ApiGithub.bs.js");

var initialState_cards = [];

var initialState_modal = {
  id: 0,
  name: "",
  avatar: "",
  login: "",
  url: "",
  created_at: "",
  followers: -1,
  following: -1,
  modal_opem: false,
  avatar_url: "",
  html_url: "",
  score: 0
};

var initialState = {
  cards: initialState_cards,
  modal: initialState_modal
};

function reducer(state, action) {
  var match = action.type_;
  if (match >= 3) {
    return {
            cards: state.cards,
            modal: action.payload.modal
          };
  }
  switch (match) {
    case /* Search */0 :
        return {
                cards: action.payload.cards,
                modal: state.modal
              };
    case /* MoreInfo */1 :
        return {
                cards: state.cards,
                modal: action.payload.modal
              };
    case /* Close */2 :
        return {
                cards: state.cards,
                modal: {
                  id: 0,
                  name: "",
                  avatar: "",
                  login: "",
                  url: "",
                  created_at: "",
                  followers: -1,
                  following: -1,
                  modal_opem: false,
                  avatar_url: "",
                  html_url: "",
                  score: 0
                }
              };
    
  }
}

var ApiGithub = ApiGithub$Project.ApiGithub;

exports.ApiGithub = ApiGithub;
exports.initialState = initialState;
exports.reducer = reducer;
/* No side effect */
