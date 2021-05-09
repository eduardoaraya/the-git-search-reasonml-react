'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

var url = "https://api.github.com/search/users?q=";

function get(user, setData) {
  return fetch(url + user).then(function (response) {
                  return response.json();
                }).then(function (jsonResponse) {
                console.log(jsonResponse);
                Curry._1(setData, jsonResponse.items);
                return Promise.resolve(true);
              }).catch(function (_err) {
              return Promise.resolve(false);
            });
}

function handleSearch(search, setData) {
  if (search === "") {
    return Promise.resolve(false);
  } else {
    return get(search, setData);
  }
}

var ApiGithub = {
  url: url,
  get: get,
  handleSearch: handleSearch
};

exports.ApiGithub = ApiGithub;
/* No side effect */
