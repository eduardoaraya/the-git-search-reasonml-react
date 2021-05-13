'use strict';

var ApiGithub$Project = require("../../services/ApiGithub.bs.js");

function jsToUser(data) {
  return {
          id: data.id,
          avatar: data.avatar,
          login: data.login,
          username: data.username,
          url: data.url,
          date: data.date,
          followers: data.followers,
          following: data.following,
          modal_opem: data.modal_opem,
          avatar_url: data.avatar_url,
          html_url: data.html_url,
          score: data.score
        };
}

var initialState_cards = [];

var initialState_modal = {
  id: 0,
  avatar: "",
  login: "",
  username: "",
  url: "",
  date: "",
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
  switch (match) {
    case /* Search */0 :
        return {
                cards: action.payload.cards,
                modal: state.modal
              };
    case /* MoreInfo */1 :
        console.log(action.payload);
        return {
                cards: state.cards,
                modal: action.payload.modal
              };
    case /* Close */2 :
        console.log("> Close");
        return state;
    
  }
}

var ApiGithub = ApiGithub$Project.ApiGithub;

exports.ApiGithub = ApiGithub;
exports.jsToUser = jsToUser;
exports.initialState = initialState;
exports.reducer = reducer;
/* No side effect */
