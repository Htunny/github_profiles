githubUserSearch.controller('GitUserSearchController', ['Search', 'Repo', function(Search, Repo) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
     .then(function(response) {
       self.searchResult = response.data;
     });
    Repo.query(self.searchTerm)
      .then(function(response) {
       self.repoResult = response.data;
     });
  };

}]);
