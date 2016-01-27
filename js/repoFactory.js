githubUserSearch.factory('Repo', ['$http', function($http) {

  return {
    query: function(searchTerm) {
      return $http({
        url: "https://api.github.com/users/"+searchTerm+"/repos",
        method: "GET"
      });
    }
  }

}]);
