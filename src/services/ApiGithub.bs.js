'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

var urlList = "https://api.github.com/search/users?q=";

var urlUser = "https://api.github.com/users/";

function getList(search, setData) {
  return fetch(urlList + search).then(function (response) {
                  return response.json();
                }).then(function (jsonResponse) {
                console.log(jsonResponse);
                Curry._1(setData, jsonResponse.items);
                return Promise.resolve(true);
              }).catch(function (_err) {
              return Promise.resolve(false);
            });
}

function getUser(user) {
  return fetch(urlUser + user).then(function (response) {
                return response.json();
              }).then(function (json) {
              return Promise.resolve(json);
            });
}

function handleSearch(search, setData) {
  if (search === "") {
    return Promise.resolve(false);
  } else {
    return getList(search, setData);
  }
}

var ApiGithub = {
  urlList: urlList,
  urlUser: urlUser,
  getList: getList,
  getUser: getUser,
  handleSearch: handleSearch
};

exports.ApiGithub = ApiGithub;
/* No side effect */
