import { KweestianPage } from './app.po';

describe('kweestian App', function() {
  let page: KweestianPage;

  beforeEach(() => {
    page = new KweestianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
