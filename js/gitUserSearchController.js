githubUserSearch.controller('GitUserSearchController', [function() {
  var self = this;

  self.doSearch = function() {
    self.searchResult = {
      "items": [
        {
          "login": "Htunny",
          "avatar_url": "https://avatars2.githubusercontent.com/u/14794205?v=3&u=aaa59c90c369f802d6718c6ac6bcee66600ecc94&s=140",
          "html_url": "https://github.com/Htunny"
        }
      ]
    };
  };

}]);
