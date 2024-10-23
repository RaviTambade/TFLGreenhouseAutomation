import { CatalogPage } from './app.po';

describe('catalog App', () => {
  let page: CatalogPage;

  beforeEach(() => {
    page = new CatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
