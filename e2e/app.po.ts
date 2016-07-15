export class NewsApp2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('news-app2-app h1')).getText();
  }
}
