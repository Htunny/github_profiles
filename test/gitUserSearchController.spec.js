describe('GitUserSearchController', function() {
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a user', function() {
    var httpBackEnd;
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend
      httpBackend
        .when("GET", "https://api.github.com/search/users?q=Htunny")
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
    it('displays search results', function() {
        ctrl.searchTerm = 'Htunny';
        ctrl.doSearch();
        httpBackend.flush();
        expect(ctrl.searchResult.items).toEqual(items);
    });
  });
});
