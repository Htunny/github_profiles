describe('factory: Search', function() {
  var search;

  beforeEach(module('GitUserSearch'));
  beforeEach(inject(function(Search) {
    search = Search;
  }));
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "https://api.github.com/search/users?q=hello")
      .respond(
        { items: items }
      );
  }));
  var items = [
    {
      "login": "Htunny",
      "avatar_url": "https://avatars2.githubusercontent.com/u/14794205?v=3&u=aaa59c90c369f802d6718c6ac6bcee66600ecc94&s=140",
      "html_url": "https://github.com/Htunny"
    }
  ];

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('return search results', function() {
    search.query('hello')
     .then(function(response) {
       expect(response.data.items).toEqual(items)
     })
     httpBackend.flush();
  })

});
