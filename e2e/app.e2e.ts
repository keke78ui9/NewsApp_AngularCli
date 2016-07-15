import { NewsApp2Page } from './app.po';

describe('news-app2 App', function() {
  let page: NewsApp2Page;

  beforeEach(() => {
    page = new NewsApp2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('news-app2 works!');
  });
});
