'use strict';


var urlList = "https://api.github.com/search/users?q=";

var urlUser = "https://api.github.com/users/";

function getList(search) {
  return fetch(urlList + search).then(function (response) {
              return response.json();
            });
}

function getUser(user) {
  return fetch(urlUser + user).then(function (response) {
                return response.json();
              }).then(function (json) {
              return Promise.resolve(json);
            });
}

var handleSearch = getList;

var ApiGithub = {
  urlList: urlList,
  urlUser: urlUser,
  getList: getList,
  getUser: getUser,
  handleSearch: handleSearch
};

exports.ApiGithub = ApiGithub;
/* No side effect */
