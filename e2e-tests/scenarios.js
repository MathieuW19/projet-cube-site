'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /ressources when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/ressources");
  });


  describe('ressources', function() {

    beforeEach(function() {
      browser.get('index.html#!/ressources');
    });


    it('should render ressources when user navigates to /ressources', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('editer', function() {

    beforeEach(function() {
      browser.get('index.html#!/editer');
    });


    it('should render editer when user navigates to /editer', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
