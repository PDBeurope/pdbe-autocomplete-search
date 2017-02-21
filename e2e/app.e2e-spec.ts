import { PdbeAutocompleteSearchPage } from './app.po';

describe('pdbe-autocomplete-search App', function() {
  let page: PdbeAutocompleteSearchPage;

  beforeEach(() => {
    page = new PdbeAutocompleteSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
